import React from 'react';
import ReactQueryProvider from '@/providers/react-query-provider';

export default function Provider({ children }: { children: React.ReactNode }) {
    return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
