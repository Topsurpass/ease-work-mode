import { useMutation } from '@tanstack/react-query';
import { RequestMethod } from '@/types/enum';
import AuthHTTP from '@/lib/http-client';

interface IProps {
    requestPayload?: any;
    id?: string | number;
    requestMethod: RequestMethod;
}

const url = `/user/signup`;

export default function useMutateJobSeeker() {
    return useMutation({
        mutationFn: async ({ requestPayload, id, requestMethod }: IProps) => {
            try {
                let res: any;
                if (requestMethod === RequestMethod.POST) {
                    res = await AuthHTTP.post(url, requestPayload);
                }
                if (requestMethod === RequestMethod.PATCH) {
                    res = await AuthHTTP.patch(`${url}/${id}`, requestPayload);
                }
                if (requestMethod === RequestMethod.DELETE) {
                    res = await AuthHTTP.delete(`${url}/${id}`);
                }
                return res;
            } catch (error) {
                return Promise.reject(error);
            }
        },
    });
}
