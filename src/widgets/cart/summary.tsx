'use client';

import { Button } from '@/shared/ui';
import React from 'react';
import { useCart } from '@/shared/cart/cart-store';

export const CartSummary = () => {
    const { total } = useCart();

    return (
        <>
            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                <div className="space-y-4 rounded-lg border border-gray-800 p-4 shadow-sm sm:p-6">
                    <p className="text-xl font-semibold text-primary">Order summary</p>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <dl className="flex items-center justify-between gap-4">
                                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                                <dd className="text-base font-medium text-secondary">${Number(total.value).toFixed(2)}</dd>
                            </dl>
                            <dl className="flex items-center justify-between gap-4">
                                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                                <dd className="text-base font-medium text-secondary">0</dd>
                            </dl>
                            <dl className="flex items-center justify-between gap-4">
                                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
                                <dd className="text-base font-medium text-secondary">0</dd>
                            </dl>
                            <dl className="flex items-center justify-between gap-4">
                                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                                <dd className="text-base font-medium text-secondary">0</dd>
                            </dl>
                        </div>
                        <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                            <dt className="text-base font-bold text-primary">Total</dt>
                            <dd className="text-base font-bold text-secondary">${Number(total.value).toFixed(2)}</dd>
                        </dl>

                        <Button
                            variant={'primary'}
                            onClick={() => {
                                alert('Success');
                            }}
                        >
                            Proceed to Checkout
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};
