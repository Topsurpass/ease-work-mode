import { useQuery } from '@tanstack/react-query';
import AuthHTTP from '@/lib/http-client';
import QueryKeys from '../query-keys';

interface IParameters {
    [key: string]: any;
}

const url = `/user/profile`;

export default function useGetJobSeekerById(requestParams: IParameters = {}) {
    return useQuery({
        queryKey: [QueryKeys.GET_JOBSEEKER, requestParams],
        queryFn: async () => {
            try {
                const res = await AuthHTTP.get(url, {
                    params: {
                        ...requestParams,
                    },
                });
                return res?.data?.data.jobSeeker;
            } catch (error) {
                return Promise.reject(error);
            }
        },
    });
}
