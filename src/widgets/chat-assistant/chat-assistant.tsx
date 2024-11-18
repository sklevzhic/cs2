'use client';

import { Button } from '@/shared/ui';
import Icon from '@/shared/ui/icon';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import { MessageProps } from '@/widgets/chat-assistant/ui/message';
import { Chat } from '@/widgets/chat-assistant/ui/chat';

const chats: Array<{
    avatar: { src: string; alt: string };
    messages: Array<Omit<MessageProps, 'align'>>;
    align: 'left' | 'right';
}> = [
    {
        avatar: { src: 'https://pagedone.io/asset/uploads/1710412177.png', alt: 'Shanay image' },
        messages: [
            {
                sender: 'Shanay Cruz',
                text: 'Guts, I need a review of work. Are you readyGuts, I need a review of work. Are you readyGuts, I need a review of work. Are you readyGuts, I need a review of work. Are you readyGuts, I need a review of work. Are you ready?',
                time: '05:14 PM',
            },
            { sender: 'Shanay Cruz', text: 'Let me know', time: '05:14 PM' },
        ],
        align: 'left',
    },
    {
        avatar: { src: 'https://pagedone.io/asset/uploads/1704091591.png', alt: 'Hailey image' },
        messages: [
            { sender: 'You', text: 'Yes, let’s see, send your work here', time: '05:14 PM', isUser: true },
            { sender: 'You', text: 'Anyone on for lunch today', time: '05:14 PM', isUser: true },
        ],
        align: 'right',
    },
    {
        avatar: { src: 'https://pagedone.io/asset/uploads/1704091591.png', alt: 'Hailey image' },
        messages: [
            { sender: 'You', text: 'Yes, let’s see, send your work here', time: '05:14 PM', isUser: true },
            { sender: 'You', text: 'Anyone on for lunch today', time: '05:14 PM', isUser: true },
        ],
        align: 'right',
    },
];

export const ChatAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    if (!mounted) {
        return null;
    }

    return createPortal(
        <div className={'fixed bottom-2 right-2 max-w-[calc(100%-1rem)] z-40'}>
            {isOpen ? (
                <Chat
                    chats={chats}
                    onClose={() => {
                        setIsOpen(false);
                    }}
                />
            ) : (
                <div className="relative right-3 bottom-3">
                    <Button variant={'primary'} className={'w-14 h-14 !rounded-full'} onClick={() => setIsOpen(true)}>
                        <Icon name={'Send'} color={'white'}></Icon>
                    </Button>
                </div>
            )}
        </div>,
        document.body,
    );
};
