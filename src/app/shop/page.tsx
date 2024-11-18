import React, { Suspense } from 'react';
import { ProductsList } from '@/widgets/products/list/products-list';
import { products } from '@/shared/consts/products';

export default function ShopPage() {
    return (
        <>
            <div className="rounded-2xl px-4 lg:px-6 w-full max-w-7xl mx-auto  mb-10">
                <div className="flex flex-col gap-14 md:flex-row items-center lg:gap32">
                    <Suspense>
                        <ProductsList products={products} />
                    </Suspense>
                </div>
            </div>
        </>
    );
}
