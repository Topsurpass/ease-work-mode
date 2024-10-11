import React from 'react';
import Hero from '@/pages/User/Profile/hero';
import LeftProfileSection from '@/pages/User/Profile/left-profile';
import RightProfile from '@/pages/User/Profile/right-profile';

const Profile: React.FC = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Hero />
            <main className="mx-auto px-4 pb-12 lg:w-[80%]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <LeftProfileSection />
                    <RightProfile />
                </div>
            </main>
        </div>
    );
};

export default Profile;
