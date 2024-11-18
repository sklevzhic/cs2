'use client';

import React from 'react';
import { products } from '@/shared/consts/products';
import { ProductsList } from '@/widgets/products/list/products-list';

export const TrendingNow = () => {
    return (
        <>
            <section className="w-full px-4 lg:px-6 max-w-7xl mx-auto my-24">
                <h2 className="text-primary mb-4 text-3xl font-bold font-manrope leading-normal lg:text-start text-center">Trending now</h2>
                <ProductsList products={products.filter((_, i) => i <= 3)} />
            </section>
        </>
    );
};
