import { useQuery } from '@tanstack/react-query';
import authHTTP from '@/lib/http-client';
import QueryKeys from '@/api/query-keys';

interface IParameters {
    [key: string]: any;
}

const url = `/job`;

export default function useGetJobs(
    id?: string | number,
    requestParams: IParameters = {}
) {
    return useQuery({
        queryKey: [QueryKeys.GET_JOBS, id, requestParams],
        queryFn: async () => {
            try {
                const endpoint = id ? `${url}/${id}` : url;
                const res = await authHTTP.get(endpoint, {
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
