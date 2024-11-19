'use client';

import React from 'react';
import { Button } from '@/shared/ui';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function AboutUsPage() {
    const router = useRouter();
    return (
        <>
            <div className="rounded-2xl px-4 lg:px-6 w-full max-w-7xl mx-auto  mb-10">
                <div className="flex flex-col gap-14 items-center lg:gap32">
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
                                        We offer a user-friendly marketplace for purchasing the best items for Counter-Strike: Global Offensive, including
                                        AK-47s and the finest CSGO knives. High-quality gaming gear shouldn't cost a fortune. We provide low prices, allowing
                                        gamers of all levels to access top-tier equipment without breaking the bank. With us, you can save up to 20% on
                                        purchases compared to the community marketplace. All items listed on our site can be quickly delivered to your account.
                                        Start shopping today and unlock your true gaming potential!
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
                    <section className="py-8 antialiased md:py-16">
                        <div className="mx-auto flex justify-center max-w-screen-xl px-4 2xl:px-0">
                            <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg">
                                <div className={'flex justify-center'}>
                                    <Image width={200} height={120} src={'/images/sertificate-logo.png'} alt={'Certificate of  Incorporation'} />
                                </div>
                                <div className="text-center mb-8">
                                    <h1 className="text-2xl font-bold text-gray-800 uppercase">Certificate of Incorporation</h1>
                                    <p className="text-sm text-gray-600">Of A Private Limited Company</p>
                                </div>

                                <div className="mb-6">
                                    <p className="text-sm text-gray-600 mb-2">Company Number:</p>
                                    <p className="text-lg font-semibold text-gray-800">16074058</p>
                                </div>

                                <div className="mb-6">
                                    <p className="text-sm text-gray-600 mb-2">The Registrar of Companies for England and Wales, hereby certifies that</p>
                                    <p className="text-lg font-bold text-gray-900">SKINVERSE LTD</p>
                                </div>

                                <div className="mb-6">
                                    <p className="text-gray-700 text-sm">
                                        is this day incorporated under the Companies Act 2006 as a private company, that the company is limited by shares, and
                                        the situation of its registered office is in England and Wales.
                                    </p>
                                </div>

                                <div className="border-t border-gray-300 pt-6">
                                    <p className="text-sm text-gray-600">Given at Companies House, Cardiff, on</p>
                                    <p className="text-lg font-semibold text-gray-800">12th November 2024</p>
                                </div>

                                <div className={'flex justify-center mt-3'}>
                                    <Button variant={'primary'}>
                                        <a href="/images/sertificate.pdf" download="certificate.pdf" className="text-white">
                                            Download
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
