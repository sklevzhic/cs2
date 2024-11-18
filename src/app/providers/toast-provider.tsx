'use client';

import { ToastContainer } from 'react-toastify';
import { ReactNode } from 'react';

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    return (
        <>
            {children}
            <ToastContainer />
        </>
    );
};
