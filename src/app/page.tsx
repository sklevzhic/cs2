import React, { Suspense } from 'react';
import { Hero } from '@/widgets/main/hero';
import { TrendingNow } from '@/widgets/main/trending-now';
import { AboutUsMain } from '@/widgets/main/about-us-main';

export default function Home() {
    return (
        <>
            <Suspense>
                <Hero />
                <TrendingNow />
                <AboutUsMain />
            </Suspense>
        </>
    );
}
