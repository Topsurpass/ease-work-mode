import useGetJobSeekerById from '@/api/job-seekers/use-get-jobSeekerId';

export default function data() {
    const { data } = useGetJobSeekerById();

    return data;
}
