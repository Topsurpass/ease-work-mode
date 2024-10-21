import { CirclePlus, X } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
//import useGetMinistryById from '@/api/ministries/use-get-ministry-id';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { fullNameInitials } from '@/lib/helpers';
import DisplayJobApplicants from './applicants-table';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription,
} from '@/components/ui/card';
//import ChangeHom from './change-hom';
//import { DisplayView, EntityType } from '@/types/enum';
//import AddMember from './add-member';
//import DisplaySwitcher from './display-switcher';
//import useGlobalProvider from '@/hooks/use-global-provider';
//import useAppStore from '@/stores/app-store';
//import DisplayMemberCard from './card-display';
//import DisplayMemberTable from './table-display';
//import ChangeAhom from './change-ahom';

export default function JobApplicants() {
    //const { ministryId } = useParams();
    //const { data } = useGetMinistryById({ ministryId });
    const navigate = useNavigate();
    //const { onModalOpen } = useGlobalProvider();
    //const viewMode = useAppStore((state) => state.memberViewMode);

    return (
        <>
            <section className="">
                <DisplayJobApplicants />
            </section>
        </>
    );
}
