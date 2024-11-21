import { FC, useState } from 'react';
import { Button } from '@/shared/ui';

interface ChatInputProps {
    onSend: (content: string) => void;
}

export const ChatInput: FC<ChatInputProps> = ({ onSend }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSend = () => {
        if (inputValue.trim() !== '') {
            onSend(inputValue);
            setInputValue('');
        }
    };

    return (
        <div className="w-full pl-3 pr-1 py-1 rounded-3xl border border-gray-200 items-center gap-2 inline-flex justify-between">
            <div className="flex items-center gap-2 w-full">
                <input
                    className="grow shrink bg-inherit basis-0 text-black text-sm font-medium leading-4 focus:outline-none"
                    placeholder="Type here..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} // Обновляем состояние при вводе текста
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSend(); // Отправляем сообщение при нажатии Enter
                        }
                    }}
                />
            </div>
            <div className="flex items-center gap-2">
                <Button
                    variant={'primary'}
                    onClick={handleSend} // Отправляем сообщение при клике на кнопку
                    className={'!p-4 !rounded-full'}
                >
                    Send
                </Button>
            </div>
        </div>
    );
};
