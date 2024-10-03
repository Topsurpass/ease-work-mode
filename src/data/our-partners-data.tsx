import google from '@/assets/logo/google-2.png';
import microsoft from '@/assets/logo/microsoft.png';
import amazon from '@/assets/logo/amazon.png';
import { Partner } from '@/types/partners';

export const PARTNERS: Partner = [
    {
        name: 'Google',
        logo: google,
        description:
            'One of the largest tech companies, partnering with us for job placements.',
        website: 'https://google.com',
    },
    {
        name: 'Amazon',
        logo: amazon,
        description:
            'A global e-commerce giant, offering top-notch roles for software engineers.',
        website: 'https://amazon.com',
    },
    {
        name: 'Microsoft',
        logo: microsoft,
        description:
            'Microsoft partners with us for hiring specialized software developers.',
        website: 'https://microsoft.com',
    },
];
