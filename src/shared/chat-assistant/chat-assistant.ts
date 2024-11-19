'use client';

import { create } from 'zustand';
import { io } from 'socket.io-client';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const socket = io('http://3.70.1.9:5015/');

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
    leftChat: () => void;
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
        socket.emit('joinChat', chatId);

        socket.on('chatMessage', (message: ChatMessage) => {
            get().addMessage(message);
        });
    },

    leftChat: () => {
        socket.off('chatMessage');
    },

    fetchChatHistory: async () => {
        const chatId = get().chatId;
        try {
            const response = await axios.get(`http://3.70.1.9:5015/api/chat/history/${chatId}`);
            set({ messages: response.data });
        } catch (error) {
            console.error('Ошибка при получении истории чата:', error);
        }
    },

    sendMessage: (content: string) => {
        const chatId = get().chatId;
        const message: MessageCreationAttributes = {
            chatId,
            content: content,
        };
        socket.emit('chatMessage', message);
    },

    toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),
    closeChat: () => set({ isOpen: false }),

    addMessage: (message: ChatMessage) => {
        set((state) => ({ messages: [...state.messages, message] }));
    },

    generateAndStoreKey: () => {
        let storedKey = localStorage.getItem('chatKey');
        if (!storedKey) {
            storedKey = uuidv4();
            localStorage.setItem('chatKey', storedKey);
        }
        set({ chatId: storedKey });
    },
}));
