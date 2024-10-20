import { useMutation, useQueryClient } from '@tanstack/react-query';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'sonner';
import { HTTP } from '@/lib/http-client';
import { setAuthTokenHTTP } from '@/lib/set-auth-token';
//import useAuthStore from '@/stores/user-store';
import useEmpAuthStore from '@/stores/employer-store';

type RequestPayload = {
    email: string;
    password: string;
};

const useLoginEmployer = () => {
    const queryClient = useQueryClient();
    const addUserToStore = useEmpAuthStore((state) => state.setUser);
    return useMutation({
        mutationFn: async (requestPayload: RequestPayload) => {
            try {
                const res = await HTTP.post('/employer/login', requestPayload);
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
                ...rest.data.employer,
                ...decodedToken,
            } as any); // TODO: replace any type with the correct one
            queryClient.invalidateQueries();
        },
        onError: (err: any) => {
            toast.error('Login failed', {
                description: err?.response?.data?.message,
            });
        },
    });
};

export default useLoginEmployer;
