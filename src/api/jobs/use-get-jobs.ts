import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import authHTTP from '@/lib/http-client';
import QueryKeys from '@/api/query-keys';

interface IParameters {
    [key: string]: any;
}

const url = `/job`;

export function useGetJobs(requestParams: IParameters = {}) {
    return useInfiniteQuery({
        queryKey: [QueryKeys.GET_JOBS, requestParams],
        queryFn: async ({ pageParam = 1 }) => {
            try {
                const res = await authHTTP.get(url, {
                    params: {
                        ...requestParams,
                        page: pageParam,
                        limit: 10,
                    },
                });
                return res?.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },
        getNextPageParam: (lastPage) => lastPage?.nextPage ?? false,
        initialPageParam: 1,
    });
}

export function useGetJobById(
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
