'use client';

import React, { useState } from 'react';
import { CartCountHandler } from '@/shared/ui';
import classNames from 'classnames';
import { usePathname, useRouter } from 'next/navigation';
import { useCart } from '@/shared/cart/cart-store';
import { useOutsideClick } from '@/shared/hooks/use-on-outside-ckick';

export const Header = () => {
    const router = useRouter();
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const { total } = useCart();
    const pathname = usePathname();

    const menuMobileRef = useOutsideClick<HTMLDivElement>(() => {
        setIsPopUpOpen(false);
    });

    const menu = [
        {
            title: 'Home',
            pathname: '/',
        },
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
            <div className={'fixed w-full z-10 bg-background'}>
                <header className={'w-full max-w-7xl mx-auto'} ref={menuMobileRef}>
                    <nav className="py-5 px-4 lg:px-6">
                        <div className="flex flex-wrap justify-between items-center">
                            <a
                                onClick={() => {
                                    router.push('/');
                                    setIsPopUpOpen(false);
                                }}
                                className="flex items-center cursor-pointer"
                            >
                                <img width={80} height={20} src={'/images/logo.png'} />
                            </a>
                            <div className="flex items-center md:order-2">
                                <CartCountHandler
                                    count={total.items}
                                    onClick={() => {
                                        router.push('/cart');
                                        setIsPopUpOpen(false);
                                    }}
                                />
                                <button
                                    type="button"
                                    className="inline-flex ml-4 items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-inherit focus:outline-none focus:ring-2 focus:ring-blue-800"
                                    onClick={() => {
                                        if (isPopUpOpen) {
                                            setIsPopUpOpen(false);
                                        } else {
                                            setIsPopUpOpen(true);
                                        }
                                    }}
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {!isPopUpOpen ? (
                                        <>
                                            <svg className="w-6 h-6" fill={'hsl(var(--primary))'} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-6 h-6" fill={'hsl(var(--primary))'} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </div>
                            <div
                                className={classNames(!isPopUpOpen && 'hidden', 'justify-between items-center w-full md:flex md:w-auto md:order-1')}
                                ref={menuMobileRef}
                            >
                                <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                                    {menu.map((menuItem, index) => {
                                        return (
                                            <li key={index}>
                                                <a
                                                    onClick={() => {
                                                        router.push(menuItem.pathname);
                                                        setIsPopUpOpen(false);
                                                    }}
                                                    className={`block cursor-pointer py-2 pr-4 pl-3 hover:bg-primaryHover md:hover:bg-inherit hover:text-white md:border-0 md:hover:text-primary md:p-0
                                                ${pathname === menuItem.pathname ? 'text-primary' : 'text-primary-foreground'}`}
                                                >
                                                    {menuItem.title}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </>
    );
};
