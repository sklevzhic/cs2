'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

export const Footer = () => {
    const router = useRouter();
    const pathname = usePathname();

    const menu = [
        {
            title: 'Shop',
            pathname: '/shop',
        },
        {
            title: 'About us',
            pathname: '/about-us',
        },
        {
            title: 'Contacts',
            pathname: '/contacts',
        },
    ];

    return (
        <>
            <footer className="w-full max-w-7xl mx-auto pt-20 px-4 lg:px-6 font-[sans-serif] tracking-wide">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="lg:flex flex-col">
                        <div className={'mb-8'}>
                            <a
                                onClick={() => {
                                    router.push('/');
                                }}
                                className="flex items-center cursor-pointer"
                            >
                                <img width={120} height={30} src={'/images/logo.png'} />
                            </a>
                        </div>

                        <div className="flex justify-start space-x-5 items-center mt-[-12px] md:hidden">
                            <img className={'w-12 h-5'} src="/images/payments/visa.png" alt="" />
                            <img className={'w-12 h-6 mt-[-6px]'} src="/images/payments/mc.png" alt="" />
                        </div>
                    </div>

                    <div className={'mb-6'}>
                        <h4 className="text-lg font-semibold mb-6 text-primary-foreground">Information</h4>
                        <ul className="space-y-4">
                            {menu.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a
                                            onClick={() => {
                                                router.push(item.pathname);
                                            }}
                                            className={`block cursor-pointer hover:text-primaryHover p-0.5 md:border-0 md:hover:text-primary md:p-0
                                                ${pathname === item.pathname ? 'text-primary' : 'text-primary-foreground'}`}
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="justify-end space-x-10 hidden  md:flex mt-[-12px]">
                        <img className={'w-20 h-8'} src="/images/payments/visa.png" alt="" />
                        <img className={'w-20 h-10 mt-[-2px]'} src="/images/payments/mc.png" alt="" />
                    </div>
                </div>
                <div className={'flex justify-center pb-2 items-center'}>
                    <p className="text-secondary text-sm">© 2024, All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};
