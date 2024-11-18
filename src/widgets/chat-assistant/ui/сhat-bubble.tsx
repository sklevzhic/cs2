import { FC } from 'react';
import { Avatar, AvatarImage } from '@/shared/ui';
import { Message, MessageProps } from '@/widgets/chat-assistant/ui/message';

interface ChatBubbleProps {
    avatar: { src: string; alt: string };
    messages: Array<Omit<MessageProps, 'align'>>;
    align: 'left' | 'right';
}

export const ChatBubble: FC<ChatBubbleProps> = ({ avatar, messages, align }) => (
    <div className={`flex gap-2.5 ${align === 'right' ? 'justify-end' : ''}`}>
        {align === 'left' && (
            <Avatar>
                <AvatarImage src={avatar.src} alt={avatar.alt} />
            </Avatar>
        )}
        <div>
            {messages.map((msg, idx) => (
                <Message key={idx} {...msg} align={align} />
            ))}
        </div>
        {align === 'right' && (
            <Avatar>
                <AvatarImage src={avatar.src} alt={avatar.alt} />
            </Avatar>
        )}
    </div>
);
