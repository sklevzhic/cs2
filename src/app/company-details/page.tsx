'use client';

import React from 'react';
import { Button } from '@/shared/ui';
import Image from 'next/image';

export default function CompanyDetails() {
    return (
        <>
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
                                is this day incorporated under the Companies Act 2006 as a private company, that the company is limited by shares, and the
                                situation of its registered office is in England and Wales.
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
        </>
    );
}
