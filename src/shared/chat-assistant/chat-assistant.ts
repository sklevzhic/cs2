'use client';

import { create } from 'zustand';
import { io } from 'socket.io-client';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const SOCKET_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL + '/api';
const JOIN_CHAT_EVENT = 'joinChat';
const LEAVE_CHAT_EVENT = 'leaveChat';
const CHAT_MESSAGE_EVENT = 'chatMessage';
const LOCAL_STORAGE_CHAT_KEY = 'chatKey';

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

        socket.emit(JOIN_CHAT_EVENT, chatId);

        socket.on(CHAT_MESSAGE_EVENT, (message: ChatMessage) => {
            get().addMessage(message);
        });
    },

    leaveChat: () => {
        const chatId = get().chatId;
        if (chatId) socket.emit(LEAVE_CHAT_EVENT, chatId);
        socket.off(CHAT_MESSAGE_EVENT);
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
            console.error('Error fetching chat history:', error);
        }
    },

    sendMessage: (content: string) => {
        const chatId = get().chatId;
        if (!chatId) return;

        const message: MessageCreationAttributes = { chatId, content };
        socket.emit(CHAT_MESSAGE_EVENT, message, (ack: { success: boolean; error?: string }) => {
            if (!ack.success) console.error('Error sending message:', ack.error);
        });
    },

    toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),
    closeChat: () => set({ isOpen: false }),
    addMessage: (message: ChatMessage) => set((state) => ({ messages: [...state.messages, message] })),
    generateAndStoreKey: () => {
        let storedKey = localStorage.getItem(LOCAL_STORAGE_CHAT_KEY);
        if (!storedKey) {
            storedKey = uuidv4();
            localStorage.setItem(LOCAL_STORAGE_CHAT_KEY, storedKey);
        }
        set({ chatId: storedKey });
    },
}));
