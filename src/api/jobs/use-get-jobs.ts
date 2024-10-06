import { useQuery } from '@tanstack/react-query';
import authHTTP from '@/lib/http-client';
import QueryKeys from '@/api/query-keys';

interface IParameters {
    [key: string]: any;
}

const url = `/job`;

export default function useGetJobs(requestParams: IParameters = {}) {
    return useQuery({
        queryKey: [QueryKeys.GET_JOBS, requestParams],
        queryFn: async () => {
            try {
                const res = await authHTTP.get(url, {
                    params: {
                        ...requestParams,
                    },
                });
                return res?.data?.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },
    });
}
