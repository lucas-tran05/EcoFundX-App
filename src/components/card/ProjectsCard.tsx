'use client';
import React from "react";
import Link from "next/link";
import { Card, Button, Progress, Flex, Typography, Tag } from "antd";
import type { ProgressProps } from 'antd';
import { CSSProperties } from "react";

interface ProjectsCardProps {
    _id: string | number;
    title: string;
    tag?: string;
    description: string;
    endDate?: Date;
    progress: number;
    amount: number;
    image?: string;
}

export default function ProjectsCard({
    _id = "none",
    title = "none",
    tag = "none",
    description = "none",
    endDate = new Date(),
    progress = 0,
    amount = 0,
    image = "/images/post.png",
}: ProjectsCardProps) {

    const twoColors: ProgressProps['strokeColor'] = {
        '0%': '#108ee9',
        '100%': '#87d068',
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
            <Flex justify="space-between">
                <Tag color="blue">{tag}</Tag>
                <Typography.Text type="secondary">
                    {endDate ? Math.ceil((endDate.getTime() - Date.now()) / (1000 * 3600 * 24)) : "No end"} days left
                </Typography.Text>
            </Flex>
            <Typography.Title level={5} style={{ margin: '8px 0', fontWeight: 'bold' }} ellipsis={{ rows: 1 }}> 
                {title}
            </Typography.Title>
            <Typography.Paragraph type="secondary" style={{ marginBottom: '16px' }} ellipsis={{ rows: 2 }}>
                {description}
            </Typography.Paragraph>
            <Progress
                percent={progress}
                status="active"
                strokeColor={twoColors}
            />
            <Flex justify="space-between" align="middle" style={{ marginTop: '16px' }}>
                <Typography.Text style={amountStyle}>₫{Number(amount).toLocaleString('vi-VN')}</Typography.Text>
                <Button type="primary">
                    <Link href={`/projects/${_id}`}>Tham gia ngay</Link>
                </Button>
            </Flex>
        </Card>
    );
}
