'use client';

import React from 'react';
import { Button } from '@/shared/ui';
import { useRouter } from 'next/navigation';

export default function AboutUsPage() {
    const router = useRouter();
    return (
        <>
            <div className="rounded-2xl px-4 lg:px-6 w-full max-w-7xl mx-auto  mb-10">
                <div className="flex flex-col gap-14 md:flex-row items-center lg:gap32">
                    <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                        <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                                <img className=" rounded-xl object-cover" src="/images/about-us1.jpg" alt="about Us image" />
                            </div>

                            <img className="sm:ml-0 ml-auto rounded-xl object-cover" src="/images/about-us2.jpg" alt="about Us image" />
                        </div>

                        <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-center items-start gap-8 flex">
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                    <h2 className="text-primary-foreground text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                        About Us
                                    </h2>
                                    <p className="text-secondary text-base font-normal leading-relaxed lg:text-start text-center">
                                        Playtech provides an easy-to-use marketplace to purchase the best items for Counter-Strike: Global Offensive, including
                                        the AK-47 and the best CSGO knives. High-quality gaming gear shouldn't come at exorbitant prices. We offer low pricing,
                                        allowing gamers of all backgrounds to access top-tier equipment without breaking the bank. At Playtech, you can save up
                                        to 20% on purchases compared to the Steam community market. All items displayed on our site can be quickly delivered to
                                        your Steam account. Start shopping today and unlock your true gaming potential!
                                    </p>
                                </div>

                                <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                                    <div className="flex-col justify-start items-start inline-flex">
                                        <h3 className="text-primary text-4xl font-bold font-manrope leading-normal">100%</h3>
                                        <h6 className="text-secondary text-base font-normal leading-relaxed">Satisfied Customers</h6>
                                    </div>

                                    <div className="flex-col justify-start items-start inline-flex">
                                        <h4 className="text-primary  text-4xl font-bold font-manrope leading-normal">20%</h4>
                                        <h6 className="text-secondary text-base font-normal leading-relaxed">Average Savings</h6>
                                    </div>

                                    <div className="flex-col justify-start items-start inline-flex">
                                        <h4 className="text-primary  text-4xl font-bold font-manrope leading-normal">1000+</h4>
                                        <h6 className="text-secondary text-base font-normal leading-relaxed">Items Available</h6>
                                    </div>
                                </div>
                            </div>
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
                </div>
            </div>
        </>
    );
}
