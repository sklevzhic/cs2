import React from 'react';
import cls from 'classnames';

interface StatusProps {
    status: string;
}

const TextStatus = ({ status }: StatusProps) => {
    const classNameWrapper = `flex item-center p-1 rounded-full w-20 gap-1`;
    const classNameText = `font-medium text-xs capitalize`;
    const colorStyle = () => {
        switch (status) {
            case 'online':
                return 'text-green-600';

            case 'offline':
                return 'text-red-600';
            default:
                return 'text-black';
        }
    };

    return (
        <div className={classNameWrapper}>
            <span className={cls(classNameText, colorStyle())}>{status}</span>
        </div>
    );
};

export default TextStatus;
