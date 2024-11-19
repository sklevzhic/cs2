'use client';

import { create } from 'zustand';
import { io } from 'socket.io-client';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const SOCKET_URL = 'http://3.70.1.9:5015';
const API_BASE_URL = 'http://3.70.1.9:5015/api';

const socket = io(SOCKET_URL, {
    transports: ['websocket', 'polling'],
    rejectUnauthorized: false,
    reconnection: true,
});

export interface ChatMessage {
    isUser?: boolean;
    chatId: string;
    content: string;
    sender: string;
    telegramMessageId: number;
    timestamp: string;
    _id: string;
}

interface MessageCreationAttributes {
    chatId: string;
    content: string;
}

interface ChatStore {
    isOpen: boolean;
    messages: ChatMessage[];
    chatId: string;
    joinChat: () => void;
    leaveChat: () => void;
    fetchChatHistory: () => void;
    sendMessage: (content: string) => void;
    toggleChat: () => void;
    closeChat: () => void;
    addMessage: (message: ChatMessage) => void;
    generateAndStoreKey: () => void;
}

export const useChatStore = create<ChatStore>((set, get) => ({
    isOpen: false,
    messages: [],
    chatId: '',

    joinChat: () => {
        const chatId = get().chatId;
        if (!chatId) get().generateAndStoreKey();

        socket.emit('joinChat', chatId);

        socket.on('chatMessage', (message: ChatMessage) => {
            get().addMessage(message);
        });
    },

    leaveChat: () => {
        const chatId = get().chatId;
        if (chatId) socket.emit('leaveChat', chatId);
        socket.off('chatMessage');
    },

    fetchChatHistory: async () => {
        const chatId = get().chatId;
        if (!chatId) return;

        try {
            const response = await axios.get(`${API_BASE_URL}/chat/history/${chatId}`, {
                httpAgent: new (require('http').Agent)({ rejectUnauthorized: false }),
            });
            set({ messages: response.data });
        } catch (error) {
            console.error(error);
        }
    },

    sendMessage: (content: string) => {
        const chatId = get().chatId;
        if (!chatId) return;

        const message: MessageCreationAttributes = { chatId, content };
        socket.emit('chatMessage', message, (ack: { success: boolean; error?: string }) => {
            if (!ack.success) console.error(ack.error);
        });
    },

    toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),
    closeChat: () => set({ isOpen: false }),
    addMessage: (message: ChatMessage) => set((state) => ({ messages: [...state.messages, message] })),
    generateAndStoreKey: () => {
        let storedKey = localStorage.getItem('chatKey');
        if (!storedKey) {
            storedKey = uuidv4();
            localStorage.setItem('chatKey', storedKey);
        }
        set({ chatId: storedKey });
    },
}));
