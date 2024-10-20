import React from 'react';
import ReactQueryProvider from '@/providers/react-query-provider';
import ToastProvider from '@/providers/toast-provider';
import { GlobalProvider } from './global-provider';
import { MenuProvider } from '@/context/menuContext';

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <GlobalProvider>
            <ReactQueryProvider>
                <MenuProvider>
                    {children}
                    <ToastProvider />
                </MenuProvider>
            </ReactQueryProvider>
        </GlobalProvider>
    );
}
