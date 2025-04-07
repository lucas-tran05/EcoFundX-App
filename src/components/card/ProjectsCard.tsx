'use client';
import React from "react";
import { Card, Button, Progress } from "antd";
import { CSSProperties } from "react";

interface ProjectsCardProps {
    title: string;
    description: string;
    progress: number;
    amount: number | string;
    image?: string;
    onClick?: () => void;
}

export default function ProjectsCard({
    title = "none",
    description = "none",
    progress = 0,
    amount = "0",
    image = "/solar-panels.jpg",
    onClick
}: ProjectsCardProps) {

    const tagStyle: CSSProperties = {
        display: 'inline-block',
        padding: '4px 12px',
        borderRadius: '16px',
        backgroundColor: 'rgba(0, 184, 124, 0.1)',
        color: '#00B87C',
        fontSize: '14px',
        marginBottom: '8px'
    };

    const amountStyle: CSSProperties = {
        color: 'var(--primary-color)',
        fontSize: '16px',
        fontWeight: 'bold',
    };

    return (
        <Card
            hoverable
            cover={
                <div style={{ position: 'relative', height: '180px' }}>
                    <img
                        alt={title}
                        src={image}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
            }
        >
            <div style={tagStyle}>Năng lượng tái tạo</div>
            <h3 style={{ fontSize: '18px', margin: '8px 0' }}>{title}</h3>
            <p style={{ color: '#666', fontSize: '14px' }}>{description}</p>
            <Progress
                percent={progress}
                status="active"
                strokeColor="#00B87C"
                format={() => `${progress}% đạt mục tiêu`}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
                <div style={amountStyle}>₫{amount}</div>
                <Button type="primary" onClick={onClick}>
                    Tham gia ngay
                </Button>
            </div>
        </Card>
    );
}
