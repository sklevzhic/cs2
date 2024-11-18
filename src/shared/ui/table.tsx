import { cx } from 'class-variance-authority';
import classNames from 'classnames';
import React from 'react';

export const Table: React.FC<React.ComponentPropsWithoutRef<'table'>> = ({ className, ...props }) => {
    return <table className={cx('rounded-xl', className)} {...props} />;
};

export const TableRow: React.FC<React.ComponentPropsWithoutRef<'tr'>> = ({ className, ...props }) => {
    return <tr className={classNames(cx('bg-white transition-all duration-500 hover:bg-gray-50', className))} {...props} />;
};

export const TableHeader: React.FC<React.ComponentPropsWithoutRef<'th'>> = ({ className, children, ...props }) => {
    return (
        <th className={classNames(cx('p-3 text-left text-sm leading-6 font-semibold text-black uppercase rounded-t-xl', className))} {...props}>
            <span>{children}</span>
        </th>
    );
};

export const TableData: React.FC<React.ComponentPropsWithoutRef<'td'>> = ({ className, ...props }) => {
    return <td className={cx('p-3 whitespace-nowrap text-sm leading-6 font-medium text-gray-900', className)} {...props} />;
};
