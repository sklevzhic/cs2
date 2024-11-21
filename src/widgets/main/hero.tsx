'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/shared/ui';

export const Hero = () => {
    const router = useRouter();

    return (
        <>
            <div className="rounded-2xl px-4 lg:px-6 w-full max-w-7xl mx-auto  mb-10">
                <div className="flex flex-col gap-14 md:flex-row items-center lg:gap32">
                    <div className="w-full ">
                        <div className="flex items-center text-sm font-medium text-primary-foreground justify-center lg:justify-start">
                            <span className="bg-primary py-1 px-3 rounded-2xl text-xs font-medium text-primary-foreground mr-3 ">#1</span>
                            Counter-Strike
                        </div>
                        <h1 className="py-8 text-center text-primary-foreground font-bold font-manrope text-2xl  md:text-3xl lg:text-4xl lg:text-left leading-[35px]">
                            Master the Battlefield with<span className="text-primary"> Counter-Strike </span>Arsenal
                        </h1>
                        <p className=" text-secondary text-md  text-center lg:text-left">
                            Enhance your gaming skills with a wide range of Counter-Strike weapons and gear. Outsmart your opponents and claim victory. Shop now
                            to upgrade your arsenal.
                        </p>
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
                    <div className="w-full lg:col-span-6 block overflow-hidden rounded-3xl object-cover">
                        <img src="/images/hero.jpg" alt="Dashboard image" className="w-full" />
                    </div>
                </div>
            </div>
        </>
    );
};
