import { useMutation, useQueryClient } from '@tanstack/react-query';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'sonner';
import { HTTP } from '@/lib/http-client';
import { setAuthTokenHTTP } from '@/lib/set-auth-token';
import useAuthStore from '@/stores/user-store';

type RequestPayload = {
    email: string;
    password: string;
};

const useLoginUser = () => {
    const queryClient = useQueryClient();
    const addUserToStore = useAuthStore((state) => state.setUser);
    return useMutation({
        mutationFn: async (requestPayload: RequestPayload) => {
            try {
                const res = await HTTP.post('/user/login', requestPayload);
                return res;
            } catch (error) {
                return Promise.reject(error);
            }
        },
        onSuccess: (res) => {
            const { accessToken, ...rest } = res.data;
            setAuthTokenHTTP(accessToken);
            const decodedToken = jwtDecode(accessToken);
            addUserToStore({
                accessToken,
                ...rest.data.jobSeeker,
                ...decodedToken,
            } as any); // TODO: replace any type with the correct one
            // window.location.reload();
            queryClient.invalidateQueries();
        },
        onError: (err: any) => {
            toast.error('Login failed', {
                description: err?.response?.data?.message,
            });
        },
    });
};

export default useLoginUser;
