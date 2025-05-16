"use client";
import React, { useState, useEffect, useRef } from 'react';
import { FloatButton, Tooltip, Popover, List, Input, Button } from 'antd';
import { OpenAIOutlined } from '@ant-design/icons';
import { GoogleGenerativeAI, GenerativeModel } from "@google/generative-ai";

// Đảm bảo biến môi trường đã được khai báo đúng trong project
// const API_KEY = process.env.REACT_APP_AI_KEY as string;

interface Message {
    sender: 'User' | 'AI';
    text: string;
}

const FloatAI: React.FC = () => {
    const genAI = new GoogleGenerativeAI('AIzaSyBq0upOR3-rMSoIxmecwxDBWlBG9q280p0');
    const model: GenerativeModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash-8b" });

    const [isPopoverVisible, setPopoverVisible] = useState<boolean>(false);
    const [messages, setMessages] = useState<Message[]>([
        { sender: 'AI', text: 'Hello! How can I help you today?' },
    ]);
    const [newMessage, setNewMessage] = useState<string>('');
    const chatBoxRef = useRef<HTMLDivElement>(null);

    const handleGenerateResponse = async (userMessage: string) => {
        try {
            const result = await model.generateContent(userMessage);
            const responseText = await result.response.text();
            setMessages((prev) => [...prev, { sender: 'AI', text: responseText }]);
        } catch (error) {
            console.error("Error fetching AI response:", error);
            setMessages((prev) => [...prev, { sender: 'AI', text: 'Sorry, I encountered an error.' }]);
        }
    };

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            const userMessage = newMessage.trim();
            setMessages([...messages, { sender: 'User', text: userMessage }]);
            setNewMessage('');
            handleGenerateResponse(userMessage);
        }
    };

    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [messages]);

    const content = (
        <div
            className="custom-scrollbar"
            style={{
                maxHeight: '400px',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                width: '300px',
            }}
            ref={chatBoxRef}
        >
            <List
                style={{ flex: 1, padding: '10px 0' }}
                dataSource={messages}
                renderItem={(item: Message, index: number) => (
                    <List.Item
                        key={index}
                        style={{
                            border: 'none',
                            justifyContent: item.sender === 'User' ? 'flex-end' : 'flex-start',
                            display: 'flex',
                            padding: '0 10px',
                            marginBottom: '10px',
                        }}
                    >
                        <div
                            style={{
                                background: item.sender === 'User' ? 'var(--ant-primary-1)' : '#f0f0f0',
                                color: item.sender === 'User' ? 'var(--ant-primary-6)' : 'black',
                                padding: '8px 12px',
                                borderRadius: '15px',
                                maxWidth: '80%',
                                wordWrap: 'break-word',
                            }}
                        >
                            {item.text}
                        </div>
                    </List.Item>
                )}
            />
            <div style={{ display: 'flex', gap: '10px', padding: '10px 0' }}>
                <Input
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onPressEnter={handleSendMessage}
                />
                <Button type="primary" onClick={handleSendMessage}>
                    Send
                </Button>
            </div>
        </div>
    );

    return (
        <div>
            <Popover
                content={content}
                title="Chat with AI"
                trigger="click"
                open={isPopoverVisible}
                onOpenChange={(visible: boolean) => setPopoverVisible(visible)}
                placement="topRight"
            >
                <Tooltip title="Ask AI" placement="left">
                    <FloatButton
                        shape="circle"
                        type="primary"
                        style={{
                            insetInlineEnd: 30,
                            bottom: 30,
                            border: 'none',
                        }}
                        icon={<OpenAIOutlined />}
                    />
                </Tooltip>
            </Popover>
        </div>
    );
};

export default FloatAI;
