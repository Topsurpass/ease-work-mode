import React from 'react';
import ReactQueryProvider from '@/providers/react-query-provider';
import ToastProvider from '@/providers/toast-provider';

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <ReactQueryProvider>
            {children}
            <ToastProvider />
        </ReactQueryProvider>
    );
}
