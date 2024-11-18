import React from 'react';
import cls from 'classnames';

interface StatusProps {
    status: boolean;
}

const Status = ({ status }: StatusProps) => {
    const classNameWrapper = `flex item-center p-1 rounded-full w-20 gap-1`;
    const classNameText = `font-medium text-xs capitalize`;
    const colorStyle = () => {
        switch (status) {
            case true:
                return 'text-green-600';
            case false:
                return 'text-red-600';
        }
    };

    return (
        <div className={classNameWrapper}>
            <span className={cls(classNameText, colorStyle())}>{status ? 'Active' : 'Disabled'}</span>
        </div>
    );
};

export default Status;
