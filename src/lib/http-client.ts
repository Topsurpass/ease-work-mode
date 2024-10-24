/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'sonner';
import config from '@/@config';
import useAuthStore from '@/stores/user-store';

// PUBLIC HTTP client
export const HTTP = axios.create({
    baseURL: config.baseUrl,
    timeout: config.httpTimeout,
});

// Authenticated HTTP client : for request that require accessToken
const AuthHTTP = axios.create({
    baseURL: config.baseUrl,
    timeout: config.httpTimeout,
});

// Function to refresh the access token
export const refreshAccessToken = async () => {
    const addUserToStore = useAuthStore.getState().setUser;
    const logout = useAuthStore.getState().reset;
    try {
        const { refreshToken } = useAuthStore.getState();
        const res = await HTTP.post('/user/refresh', {
            refreshToken,
        });
        const { accessToken, ...rest } = res.data;
        const decodedToken = jwtDecode(accessToken);
        addUserToStore({
            accessToken,
            ...rest,
            ...decodedToken,
        } as any);
        return accessToken;
    } catch (err: any) {
        logout();
        toast.error(err?.response?.data?.error);
        return Promise.reject(err);
    }
};

AuthHTTP.interceptors.request.use(
    async (setting: any) => {
        const token = useAuthStore.getState().accessToken;
        if (token !== null && token !== undefined && token) {
            setting.headers.Authorization = `Bearer ${token}`;
            return setting;
        }
        return setting;
    },
    (err: any) => {
        return Promise.reject(err);
    }
);

AuthHTTP.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const logout = useAuthStore.getState().reset;
        const originalRequest = error.config;

        if (
            error.response &&
            error.response.status === 401 &&
            !originalRequest._retry
        ) {
            try {
                originalRequest._retry = true;
                const token = await refreshAccessToken();
                // Retry the original request with the new access token
                originalRequest.headers.Authorization = `Bearer ${token}`;
                return await HTTP(originalRequest);
                // return await AuthHTTP(originalRequest);
            } catch (refreshError) {
                logout();
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default AuthHTTP;
