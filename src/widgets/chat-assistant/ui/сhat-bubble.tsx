import { FC } from 'react';
import { Avatar, AvatarImage } from '@/shared/ui';
import { Message } from '@/widgets/chat-assistant/ui/message';
import { ChatMessage } from '@/shared/chat-assistant/chat-assistant';

interface ChatBubbleProps {
    messages: Array<Omit<ChatMessage, 'align'>>;
}

interface GroupedChatMessage extends ChatMessage {
    groupStart: boolean;
    groupEnd: boolean;
}

export const ChatBubble: FC<ChatBubbleProps> = ({ messages }) => {
    const defaultMessage: ChatMessage = {
        _id: '11',
        timestamp: new Date().toISOString(),
        content: `Welcome to our online consultant for purchasing Counter-Strike skins! 🎮\nHow can we assist you today?\n\n1. Help with skin selection\n2. Information about prices and promotions\n3. Support and questions\n\nPlease ask your question.`,
        chatId: 'default',
        isUser: false,
        sender: 'Support',
        telegramMessageId: 1,
    };

    const _messages = [defaultMessage, ...messages];

    const groupedMessages: GroupedChatMessage[] = groupMessages(_messages);

    return (
        <>
            {groupedMessages.map((msg, idx) => {
                const align = msg.sender === 'Support' ? 'left' : 'right';

                const avatar = msg.sender === 'Support' ? '/images/bot-logo.png' : '/images/user-logo.png';

                const showAvatarAndTime = msg.groupEnd;

                return (
                    <div key={msg._id} className={`flex gap-2.5 ${align === 'right' ? 'justify-end' : ''}`}>
                        {align === 'left' && <Avatar>{showAvatarAndTime && <AvatarImage src={avatar} alt={'Avatar message'} />}</Avatar>}
                        <div>
                            <Message key={idx} time={msg.timestamp} align={align} isUser={align === 'left'} text={msg.content} />
                        </div>

                        {align === 'right' && <Avatar>{showAvatarAndTime && <AvatarImage src={avatar} alt={'Avatar message'} />}</Avatar>}
                    </div>
                );
            })}
        </>
    );
};

const groupMessages = (_messages: ChatMessage[]): GroupedChatMessage[] => {
    return _messages.reduce<GroupedChatMessage[]>((acc, msg, idx, arr) => {
        if (idx === 0 || msg.sender !== arr[idx - 1].sender) {
            acc.push({ ...msg, groupStart: true, groupEnd: false });
        } else {
            acc[acc.length - 1].groupEnd = false;
            acc.push({ ...msg, groupStart: false, groupEnd: false });
        }
        // Пометить последнее сообщение группы
        if (idx === arr.length - 1 || msg.sender !== arr[idx + 1].sender) {
            acc[acc.length - 1].groupEnd = true;
        }
        return acc;
    }, []);
};
