'use client';

import { useModal } from '@/shared/modal/modal-store';

export const ModalProvider = () => {
    const { type } = useModal();
    if (!type) return;
    return <></>;
};
