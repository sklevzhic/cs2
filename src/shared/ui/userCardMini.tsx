import { Avatar, AvatarFallback } from '@/shared/ui/avatar';
interface UserCardMiniProps {
    name: string;
    email: string;
}

export const UserCardMini = ({ name, email }: UserCardMiniProps) => {
    return (
        <div className={'flex items-center w-full overflow-hidden'}>
            <Avatar className={'mr-1'}>
                <AvatarFallback className={'bg-primary text-primary-foreground'}>AA</AvatarFallback>
            </Avatar>
            <div className={'flex flex-col'}>
                <p className={'text-left text-sm leading-6 font-semibold text-gray-900 capitalize'}>{name}</p>
                <p className={'text-secondary text-xs'}>{email}</p>
            </div>
        </div>
    );
};
