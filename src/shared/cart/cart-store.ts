import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { Product } from '@/shared/types/chats';

export interface ProductWithQuantity extends Product {
    quantity: number;
}

interface ContextType {
    products: ProductWithQuantity[];
    addProduct: (product: ProductWithQuantity) => void;
    removeProduct: (productId: ProductWithQuantity['id']) => void;
    changeQuantityById: (productId: ProductWithQuantity['id'], action: 'increase' | 'decrease') => void;
    total: {
        items: number;
        value: number;
    };
}

export const useCart = create<ContextType>(
    // @ts-ignore
    persist(
        (set, get) => ({
            products: [],
            total: {
                items: 0,
                value: 0,
            },
            addProduct: (product) => {
                const previousProduct = get().products.find((p) => p.id === product.id);

                if (previousProduct) {
                    const arrayWithoutProductToBeAdded: ProductWithQuantity[] = get().products.filter((p) => p.id !== product.id);

                    set(() => ({
                        products: [
                            ...arrayWithoutProductToBeAdded,
                            {
                                ...previousProduct,
                                quantity: previousProduct.quantity + product.quantity,
                            },
                        ],
                    }));

                    set((state) => ({
                        total: state.products.reduce(
                            (total, acc) => {
                                return {
                                    items: acc.quantity + total.items,
                                    value: Number(acc.price) * acc.quantity + total.value,
                                };
                            },
                            {
                                items: 0,
                                value: 0,
                            },
                        ),
                    }));
                    return;
                }

                set((state) => ({
                    products: [...state.products, product],
                }));

                set((state) => ({
                    total: state.products.reduce(
                        (total, acc) => {
                            return {
                                items: acc.quantity + total.items,
                                value: Number(acc.price) * acc.quantity + total.value,
                            };
                        },
                        {
                            items: 0,
                            value: 0,
                        },
                    ),
                }));
            },
            removeProduct: (productId) => {
                const newProductsArray = get().products.filter((product) => product.id !== productId);
                set(() => ({
                    products: newProductsArray,
                }));

                set((state) => ({
                    total: state.products.reduce(
                        (total, acc) => {
                            return {
                                items: acc.quantity + total.items,
                                value: Number(acc.price) * acc.quantity + total.value,
                            };
                        },
                        {
                            items: 0,
                            value: 0,
                        },
                    ),
                }));
            },
            changeQuantityById: (productId, action) => {
                let operation: number;

                if (action === 'increase') {
                    operation = 1;
                }
                if (action === 'decrease') {
                    operation = -1;
                }

                const updatedProducts = get()
                    .products.map((p) => {
                        if (p.id === productId) {
                            const newQuantity = p.quantity + operation;
                            if (newQuantity === 0) {
                                return null; // Удаляем продукт, если количество становится 0
                            }
                            return {
                                ...p,
                                quantity: newQuantity,
                            };
                        }
                        return p;
                    })
                    .filter((p) => p !== null); // Фильтруем null значения

                set(() => ({
                    products: updatedProducts,
                }));

                set((state) => ({
                    total: state.products.reduce(
                        (total, acc) => {
                            return {
                                items: acc.quantity + total.items,
                                value: Number(acc.price) * acc.quantity + total.value,
                            };
                        },
                        {
                            items: 0,
                            value: 0,
                        },
                    ),
                }));
            },
        }),
        {
            name: 'cart',
            storage: createJSONStorage(() => localStorage),
        },
    ),
);
