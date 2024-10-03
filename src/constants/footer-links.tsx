import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FooterLinks, SocialLinks } from '@/types/footer';

export const FOOTER_LINKS: FooterLinks = [
    {
        title: 'About Us',
        path: '/aboutus',
    },
    {
        title: 'Jobs',
        path: '/jobs',
    },
    {
        title: 'Contact',
        path: '/contact',
    },
    {
        title: 'FAQ',
        path: '/faq',
    },
];

export const SOCIALS: SocialLinks = [
    {
        title: 'facebook',
        path: 'https://facebook.com',
        icon: <FaFacebookF className="h-5 w-5" />,
    },
    {
        title: 'twitter',
        path: 'https://twitter.com',
        icon: <FaXTwitter className="h-5 w-5" />,
    },
    {
        title: 'linkedin',
        path: 'https://linkedin.com',
        icon: <FaLinkedinIn className="h-5 w-5" />,
    },
];
