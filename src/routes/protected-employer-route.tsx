import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useEmpAuthStore from '@/stores/employer-store';
import { useEffect } from 'react';

function ProtectedEmployerRoute({ children }: { children: React.ReactNode }) {
    const location = useLocation();
    const { isAuthenticated, expiresIn, reset } = useEmpAuthStore((state) => ({
        isAuthenticated: state.isAuthenticated,
        expiresIn: state.expiresIn,
        reset: state.reset,
    }));

    useEffect(() => {
        const currentTime = Date.now() / 1000;

        if (expiresIn < currentTime) {
            reset();
        }
    }, [expiresIn, reset]);

    if (!isAuthenticated) {
        return (
            <Navigate to="/employer/login" state={{ from: location }} replace />
        );
    }

    return children;
}

export default ProtectedEmployerRoute;
