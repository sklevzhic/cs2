import { FC } from 'react';
import { Button } from '@/shared/ui';

export const ChatInput: FC = () => (
    <div className="w-full pl-3 pr-1 py-1 rounded-3xl border border-gray-200 items-center gap-2 inline-flex justify-between">
        <div className="flex items-center gap-2">
            <input className="grow shrink basis-0 text-black text-sm font-medium leading-4 focus:outline-none" placeholder="Type here..." />
        </div>
        <div className="flex items-center gap-2">
            <Button variant={'primary'} className={'!p-4 !rounded-full'}>
                Send
            </Button>
        </div>
    </div>
);
