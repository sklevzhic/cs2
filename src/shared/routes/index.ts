export enum ROUTE_PATH {
    MAIN = '/',
    BOTS = '/bots',
    USERS = '/users',
    CHATS = '/chats',
    GATES = '/gates',
}

export const ROUTES: Record<
    ROUTE_PATH,
    {
        title?: string;
        shortTitle?: string;
        path: ROUTE_PATH;
        isVisibleInHeader: boolean;
    }
> = {
    [ROUTE_PATH.MAIN]: {
        title: 'Main',
        shortTitle: 'Main',
        path: ROUTE_PATH.MAIN,
        isVisibleInHeader: true,
    },
    [ROUTE_PATH.USERS]: {
        title: 'Users',
        shortTitle: 'Users',
        path: ROUTE_PATH.USERS,
        isVisibleInHeader: true,
    },
    [ROUTE_PATH.BOTS]: {
        title: 'Bots',
        shortTitle: 'Bots',
        path: ROUTE_PATH.BOTS,
        isVisibleInHeader: true,
    },
    [ROUTE_PATH.CHATS]: {
        title: 'Chats',
        shortTitle: 'Chats',
        path: ROUTE_PATH.CHATS,
        isVisibleInHeader: true,
    },
    [ROUTE_PATH.GATES]: {
        title: 'Gates',
        shortTitle: 'Gates',
        path: ROUTE_PATH.GATES,
        isVisibleInHeader: true,
    },
};
