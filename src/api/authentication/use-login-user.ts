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
            const { token, ...rest } = res.data.data;
            setAuthTokenHTTP(token);
            const decodedToken = jwtDecode(token);
            addUserToStore({
                token,
                ...rest,
                ...decodedToken,
            } as any); // TODO: replace any type with the correct one
            // window.location.reload();
            queryClient.invalidateQueries();
        },
        onError: (err: any) => {
            //console.log(err)
            toast.error('Login failed', {
                description: err?.message,
            });
        },
    });
};

export default useLoginUser;
