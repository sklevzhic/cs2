import type { Metadata } from 'next';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

import React from 'react';
import { ModalProvider } from '@/app/providers';
import { ToastProvider } from '@/app/providers/toast-provider';
import { Header } from '@/widgets/header/ui/header';
import { Footer } from '@/widgets/footer/ui/footer';
import { ChatAssistant } from '@/widgets/chat-assistant/chat-assistant';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
    title: 'CS SKINS - Best Marketplace for Skins',
    description: 'Discover, trade, and purchase your favorite CS:GO skins effortlessly on CS SKINS. Join the ultimate marketplace for gamers!',
    keywords: 'CS:GO skins, buy skins, sell skins, CS SKINS marketplace, trade CS:GO items',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta
                    httpEquiv="Content-Security-Policy"
                    content="default-src 'self' https:; script-src 'self' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' https: data:; font-src 'self' https: data:;"
                />
                <meta name="referrer" content="no-referrer-when-downgrade" />
            </Head>
            <body>
                <ToastProvider>
                    <ThemeProvider forcedTheme={'system'}>
                        <Header />
                        <main className="pt-24 w-full mx-auto">{children}</main>
                        <Footer />
                        <ChatAssistant />
                    </ThemeProvider>
                    <ModalProvider />
                </ToastProvider>
            </body>
        </html>
    );
}
