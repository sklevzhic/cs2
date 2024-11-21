'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/shared/ui';
import { toast } from 'react-toastify';

export default function ContactsPage() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = () => {
        reset();

        toast('Thank You for Contacting Us!', {
            type: 'success',
            position: 'top-center',
        });
    };

    return (
        <>
            <div className="py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-bgFormColorFrom to-bgFormColorTo shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="text-white relative px-4 py-10 bg-bgFormColor shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="text-center pb-6">
                            <h1 className="bg-inherit text-3xl">Contact Us!</h1>
                            <p className="bg-inherit text-gray-300">Fill up the form below to send us a message.</p>
                        </div>
                        <form className={'bg-inherit'} onSubmit={handleSubmit(onSubmit)}>
                            <input
                                className="shadow mb-4 text-gray-800 bg-gray-200 appearance-none border border-white rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Name"
                                {...register('name', { required: true })}
                            />
                            {errors.name && <span className="text-red-500">This field is required</span>}

                            <input
                                className="shadow mb-4 text-gray-800 bg-gray-200 appearance-none border border-white rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                type="email"
                                placeholder="Email"
                                {...register('email', { required: true })}
                            />
                            {errors.email && <span className="text-red-500">This field is required</span>}

                            <input
                                className="shadow mb-4 text-gray-800 bg-gray-200 appearance-none border border-white rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Subject"
                                {...register('_subject', { required: true })}
                            />
                            {errors._subject && <span className="text-red-500">This field is required</span>}

                            <textarea
                                className="shadow mb-4 min-h-0 text-gray-800 bg-gray-200 appearance-none border border-white rounded h-64 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Type your message here..."
                                {...register('message', { required: true })}
                                style={{ height: 121 }}
                                defaultValue={''}
                            />
                            {errors.message && <span className="text-red-500">This field is required</span>}

                            <div className="flex bg-inherit justify-center">
                                <Button variant={'primary'} type="submit">
                                    Send
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
