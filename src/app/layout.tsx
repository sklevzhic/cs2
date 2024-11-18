import type { Metadata } from 'next';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';

import { ModalProvider } from '@/app/providers';
import React from 'react';
import { Header } from '@/widgets/header/ui/header';
import { Footer } from '@/widgets/footer/ui/footer';
import { ToastProvider } from '@/app/providers/toast-provider';
import { ChatAssistant } from '@/widgets/chat-assistant/chat-assistant';

export const metadata: Metadata = {
    title: 'CS SKINS',
    description: 'CS SKINS',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>
                <ToastProvider>
                    <Header />
                    <div className={'pt-24 w-full mx-auto'}>
                        {children}
                        <Footer />
                    </div>
                    <ChatAssistant />
                </ToastProvider>
                <ModalProvider />
            </body>
        </html>
    );
}
