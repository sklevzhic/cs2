'use client';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as React from 'react';
import classNames from 'classnames';
import { ReactNode } from 'react';

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipPortal = TooltipPrimitive.Portal;

const TooltipContent = React.forwardRef<React.ElementRef<typeof TooltipPrimitive.Content>, React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>>(
    ({ className, side = 'top', align = 'center', ...props }, ref) => (
        <TooltipPortal>
            <TooltipPrimitive.Content
                ref={ref}
                side={side}
                align={align}
                className={classNames(
                    'z-50 p-2 text-sm leading-none rounded-md shadow-md bg-gray-800 text-white',
                    'data-[side=top]:animate-slide-down data-[side=bottom]:animate-slide-up',
                    'data-[side=right]:animate-slide-left data-[side=left]:animate-slide-right',
                    className,
                )}
                {...props}
            />
        </TooltipPortal>
    ),
);
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

const TooltipArrow = React.forwardRef<React.ElementRef<typeof TooltipPrimitive.Arrow>, React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Arrow>>(
    (props, ref) => <TooltipPrimitive.Arrow ref={ref} className="fill-current text-gray-800" {...props} />,
);
TooltipArrow.displayName = TooltipPrimitive.Arrow.displayName;
const CustomTooltip = ({ triggerElement, data }: { triggerElement: ReactNode; data: string | number }) => {
    return (
        <TooltipPrimitive.Provider>
            <Tooltip>
                <TooltipTrigger className={'w-fit max-w-full'}>{triggerElement}</TooltipTrigger>
                <TooltipContent side="top" align="center" className={'max-w-[200px] break-words'}>
                    <TooltipArrow />
                    {data}
                </TooltipContent>
            </Tooltip>
        </TooltipPrimitive.Provider>
    );
};

export { CustomTooltip, Tooltip, TooltipTrigger, TooltipContent, TooltipArrow };
