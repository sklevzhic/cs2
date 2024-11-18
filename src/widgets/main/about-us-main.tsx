'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/shared/ui';

export const AboutUsMain = () => {
    const router = useRouter();
    return (
        <>
            <>
                <section className="">
                    <div className="gap-16 items-center py-8 mx-auto max-w-screen-xl flex flex-col md:flex-row justify-between lg:py-16 px-4 lg:px-6">
                        <div className="order-1 md:order-2 basis-1/2 font-light text-secondary sm:text-lg dark:text-gray-400">
                            <h2 className="text-primary mb-4 text-3xl font-bold font-manrope leading-normal lg:text-start text-center">
                                Level up your gaming experience
                            </h2>
                            <p className="mb-4 ">
                                Welcome to CSSKINS, your ultimate destination for weapons and items for the popular game Counter-Strike. As avid gamers
                                ourselves, we understand the importance of having the right tools at your disposal to conquer the virtual battlefield. We have a
                                top-notch selection of weapons for severe gamers to dominate opponents. Explore the items and gear up for victory!
                            </p>
                            <ul className={'max-w-md mb-4 space-y-1 list-disc list-inside'}>
                                <li>High-Quality Weapons</li>
                                <li>Wide Variety of Items</li>
                                <li>Competitive Pricing</li>
                                <li>Customer Satisfaction</li>
                            </ul>
                            <div className={'flex  mt-5 justify-center lg:justify-start'}>
                                <Button
                                    variant={'primary'}
                                    onClick={() => {
                                        router.push('/shop');
                                    }}
                                >
                                    Start Shopping
                                </Button>
                            </div>
                        </div>
                        <div className="order-2 md:order-1 basis-1/2 grid grid-cols-2 gap-4 mt-8">
                            <img className="w-full rounded-lg" src="/images/about-us-3.jpg" alt="office content 1" />
                            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="/images/about-us-4.jpg" alt="office content 2" />
                        </div>
                    </div>
                </section>
            </>
        </>
        // <>

        // </>
    );
};
