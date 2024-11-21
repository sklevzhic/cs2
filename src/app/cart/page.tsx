'use client';

import React from 'react';

import { CartList } from '@/widgets/cart/list';
import { CartSummary } from '@/widgets/cart/summary';
import Icon from '@/shared/ui/icon';
import { useRouter } from 'next/navigation';

export default function ContactsPage() {
    const router = useRouter();
    return (
        <>
            <section className="antialiased  min-h-[60dvh] relative mx-auto max-w-7xl  px-4 lg:px-6">
                <div>
                    <h2 className="flex text-xl font-semibold text-primary sm:text-2xl">
                        <Icon
                            onClick={() => {
                                router.back();
                            }}
                            color={'hsl(var(--primary))'}
                            className={'border p-2 cursor-pointer border-gray-600 rounded-full mr-3'}
                            size={35}
                            name={'ArrowLeft'}
                        />
                        <span>Shopping Cart</span>
                    </h2>
                    <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                        <CartList />
                        <CartSummary />
                    </div>
                </div>
            </section>
        </>
    );
}
