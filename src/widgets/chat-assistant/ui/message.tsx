import { FC } from 'react';
import classNames from 'classnames';
import React from 'react';

export interface MessageProps {
    text: string;
    time: string;
    align?: 'left' | 'right';
    isUser?: boolean;
    className?: string;
}

export const Message: FC<MessageProps> = ({ text, time, align = 'left', isUser = false, className }) => {
    const date = new Date(time);

    const _time = new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    }).format(date);

    const contentWithBreaks = text.split('\n').map((line, index) => {
        return (
            <React.Fragment key={index}>
                {line.split(' ').map((word, wordIndex) => {
                    const urlPattern = /^(https?:\/\/[^\s]+)$/;
                    if (urlPattern.test(word)) {
                        return (
                            <React.Fragment key={wordIndex}>
                                <a
                                    href={word}
                                    className={classNames(isUser ? 'text-white' : 'text-primary', 'hover:underline')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {word}
                                </a>{' '}
                            </React.Fragment>
                        );
                    }
                    return word + ' ';
                })}
                <br />
            </React.Fragment>
        );
    });

    return (
        <div className={classNames(`grid overflow-hidden ${align === 'right' ? 'text-right' : ''}`, className)}>
            <div className={`px-3.5 py-2 rounded ${isUser ? 'bg-primary' : 'bg-gray-100 !text-gray-900'}`}>
                <h5 className={`text-sm break-all font-normal ${isUser ? 'text-white' : 'text-dark'} leading-snug`}>{contentWithBreaks}</h5>
            </div>
            <div className="justify-end items-center inline-flex mb-2.5">
                <h6 className="text-xs font-normal leading-4 py-1 text-gray-500">{_time}</h6>
            </div>
        </div>
    );
};
