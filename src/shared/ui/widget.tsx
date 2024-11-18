import React from 'react';

interface WidgetProps {
    title: string;
    content: React.ReactNode;
}

export const Widget = (props: WidgetProps) => {
    const { content, title } = props;

    return (
        <div className={'p-2 w-full h-full bg-gray-100 rounded-xl shadow'}>
            <div className={'mb-2'}>
                <h5 className={'font-semibold'}>{title}</h5>
            </div>
            <div>{content}</div>
        </div>
    );
};
