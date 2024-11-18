import { CartCountHandler } from '@/shared/ui/cart-count-handler';
import React from 'react';

interface ProductCardMiniProps {
    onClick?: () => void;
    image: string;
    title: string;
    price: string;
    onClickAddToCart: () => void;
    isAddedToCart: boolean;
}

export const ProductCardMini = (props: ProductCardMiniProps) => {
    const { onClick, image, title, price, onClickAddToCart, isAddedToCart } = props;
    return (
        <>
            <div
                onClick={onClick}
                className="rounded-lg cursor-pointer border p-6 w-full truncate shadow-sm border-secondary-foreground bg-secondary-foreground"
            >
                <div className="h-56 w-full">
                    <a>
                        <img className="mx-auto h-full hidden" src={image} alt="" />
                        <img className="mx-auto h-full block" src={image} alt="" />
                    </a>
                </div>
                <div className="pt-6 w-full overflow-hidden">
                    <a className="text-lg font-semibold leading-tight hover:underline text-secondary truncate">{title}</a>
                    <div className="mt-4 flex items-center justify-between gap-4">
                        <p className="text-2xl font-extrabold leading-tight  text-primary">${price}</p>
                        <CartCountHandler size={30} onClick={onClickAddToCart} isAddedToCart={isAddedToCart} />
                    </div>
                </div>
            </div>
        </>
    );
};
