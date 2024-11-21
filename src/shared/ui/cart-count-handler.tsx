import Icon from '@/shared/ui/icon';
import React from 'react';

interface CartCountHandlerProps {
    onClick?: () => void;
    size?: number;
    count?: number;
    isAddedToCart?: boolean;
}

export const CartCountHandler = (props: CartCountHandlerProps) => {
    const { onClick, size = 35, count, isAddedToCart = false } = props;
    return (
        <>
            <div className={'relative bg-inherit'}>
                <Icon
                    name={'ShoppingCart'}
                    className={`p-1 rounded-full cursor-pointer hover:border hover:border-primaryHover ${isAddedToCart ? 'bg-primary' : 'bg-inherit'}`}
                    size={size}
                    color={!isAddedToCart ? 'hsl(var(--primary))' : 'hsl(var(--primary-foreground))'}
                    onClick={(event) => {
                        event?.stopPropagation();
                        onClick?.();
                    }}
                />
                {count ? (
                    <div className={'bg-primary text-white p-0.5 h-5 min-w-5 text-xs rounded-full text-center absolute top-[-10px] right-[-10px]'}>{count}</div>
                ) : (
                    <></>
                )}
            </div>
        </>
    );
};
