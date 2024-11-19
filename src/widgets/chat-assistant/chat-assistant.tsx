'use client';

import { Button } from '@/shared/ui';
import Icon from '@/shared/ui/icon';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import { Chat } from '@/widgets/chat-assistant/ui/chat';
import { useChatStore } from '@/shared/chat-assistant/chat-assistant';

export const ChatAssistant = () => {
    const { isOpen, messages, joinChat, chatId, generateAndStoreKey, leaveChat, fetchChatHistory, sendMessage, toggleChat, closeChat } = useChatStore();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!chatId) {
            generateAndStoreKey();
        }

        joinChat();
        fetchChatHistory();

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeChat();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            leaveChat();
        };
    }, [joinChat, fetchChatHistory, closeChat]);

    if (!mounted) {
        return null;
    }

    return createPortal(
        <div className={'fixed bottom-2 right-2 max-w-[calc(100%-1rem)] z-40'}>
            {isOpen ? (
                <Chat
                    chats={[
                        {
                            messages,
                        },
                    ]}
                    onClose={closeChat}
                    onSend={(content: string) => sendMessage(content)}
                />
            ) : (
                <div className="relative right-3 bottom-3">
                    <Button variant={'primary'} className={'w-14 h-14 !rounded-full'} onClick={toggleChat}>
                        <Icon name={'Send'} color={'white'}></Icon>
                    </Button>
                </div>
            )}
        </div>,
        document.body,
    );
};
