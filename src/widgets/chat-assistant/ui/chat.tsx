import { FC, useEffect, useRef } from 'react';
import { useOutsideClick } from '@/shared/hooks/use-on-outside-ckick';
import { Button } from '@/shared/ui';
import Icon from '@/shared/ui/icon';
import { ChatBubble } from '@/widgets/chat-assistant/ui/сhat-bubble';
import { ChatInput } from '@/widgets/chat-assistant/ui/chat-input';
import { ChatMessage } from '@/shared/chat-assistant/chat-assistant';

export interface ChatProps {
    chats: Array<{
        messages: Array<Omit<ChatMessage, 'align'>>;
    }>;
    onClose?: () => void;
    onSend: (content: string) => void;
}

export const Chat: FC<ChatProps> = ({ chats, onClose, onSend }) => {
    const chatRef = useOutsideClick<HTMLDivElement>(() => {
        onClose?.();
    });

    const refMessages = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (refMessages.current) {
            refMessages.current.scrollTop = refMessages.current.scrollHeight;
        }
    }, [chats]);

    return (
        <div ref={chatRef} className="w-full h-[98vh] sm:w-[350px] sm:h-[500px] bg-white shadow rounded-xl overflow-hidden flex flex-col">
            <div className={'bg-primary flex justify-between items-center'}>
                <div className={'flex items-center p-2'}>
                    <img width={35} height={35} src="/images/logo-assistant.png" alt="" />
                    <span className={'text-foreground'}>Assistant</span>
                </div>
                <div className={'p-2'}>
                    <Button variant={'ghost'} onClick={onClose} className={'border border-primary bg-white !rounded-full w-8 h-8 !p-1'}>
                        <Icon name={'X'} className={'text-primary'}></Icon>
                    </Button>
                </div>
            </div>
            <div ref={refMessages} className="grid flex-1 w-full overflow-auto pb-5 p-2 scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-100">
                {chats.map((chat, idx) => {
                    return <ChatBubble key={idx} {...chat} />;
                })}
            </div>
            <div className={'p-2'}>
                <ChatInput onSend={onSend} />
            </div>
        </div>
    );
};
