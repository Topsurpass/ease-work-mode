import { Outlet } from 'react-router-dom';
import Header from '@/components/header';
import Footer from '@/pages/public/Home/footer';

export default function PublicLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow pt-[80px] overflow-auto">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
