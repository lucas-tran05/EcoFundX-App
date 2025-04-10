'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import GifCard from '@/components/card/GifCard';
import { CiWallet, CiCreditCard1 } from 'react-icons/ci';
import { FaQrcode } from 'react-icons/fa';
import { Card, Typography, Input, Button, Space, Checkbox, Radio } from 'antd';
import { Row } from 'antd'
import {  ArrowRightOutlined } from '@ant-design/icons';
import { useParams, useRouter } from 'next/navigation';

const { Title, Text } = Typography;

const projects = [
    {
        id: '1',
        title: "Project 1",
        tag: "Renewable energy",
        description: "Description of project 1",
        image: "/images/post.png",
        endDate: new Date("2026-12-31"),
        progress: 50,
        amount: 1000000,
        gif: [
            {
                id_gif: '1',
                img: "/images/post.png",
                title: "Project 1 - Gif 1",
                description: "Gif description 1",
                price: 500000
            },
            {
                id_gif: '2',
                img: "/images/post.png",
                title: "Project 1 - Gif 2",
                description: "Gif description 2",
                price: 500000
            }
        ],
        onClick: () => console.log("Project 1 clicked"),
    },
    {
        id: '2',
        title: "Project 2",
        tag: "Renewable energy",
        description: "Description of project 2",
        image: "/images/post.png",
        endDate: new Date("2026-01-31"),
        progress: 75,
        amount: 2000000,
        gif: [
            {
                id_gif: '3',
                img: "/images/post.png",
                title: "Project 2 - Gif 1",
                description: "Gif description 1",
                price: 1000000
            },
            {
                id_gif: '4',
                img: "/images/post.png",
                title: "Project 2 - Gif 2",
                description: "Gif description 2",
                price: 1000000
            }
        ],
        onClick: () => console.log("Project 2 clicked"),
    },
    {
        id: '3',
        title: "Project 3",
        tag: "Renewable energy",
        description: "Description of project 3",
        image: "/images/home.svg",
        endDate: new Date("2026-02-28"),
        progress: 25,
        amount: 500000,
        gif: [
            {
                id_gif: '5',
                img: "/images/home.svg",
                title: "Project 3 - Gif 1",
                description: "Gif description 1",
                price: 250000
            },
            {
                id_gif: '6',
                img: "/images/home.svg",
                title: "Project 3 - Gif 2",
                description: "Gif description 2",
                price: 250000
            }
        ],
        onClick: () => console.log("Project 3 clicked"),
    },
    {
        id: '4',
        title: "Project 4",
        tag: "Renewable energy",
        description: "Description of project 4",
        image: "/images/post.png",
        endDate: new Date("2026-03-31"),
        progress: 100,
        amount: 1500000,
        gif: [
            {
                id_gif: '7',
                img: "/images/post.png",
                title: "Project 4 - Gif 1",
                description: "Gif description 1",
                price: 750000
            },
            {
                id_gif: '8',
                img: "/images/post.png",
                title: "Project 4 - Gif 2",
                description: "Gif description 2",
                price: 750000
            }
        ],
        onClick: () => console.log("Project 4 clicked"),
    },
    {
        id: '5',
        title: "Project 5",
        tag: "Renewable energy",
        description: "Description of project 5",
        image: "/images/home.svg",
        endDate: new Date("2026-04-30"),
        progress: 10,
        amount: 3000000,
        gif: [
            {
                id_gif: '9',
                img: "/images/home.svg",
                title: "Project 5 - Gif 1",
                description: "Gif description 1",
                price: 1500000
            },
            {
                id_gif: '10',
                img: "/images/home.svg",
                title: "Project 5 - Gif 2",
                description: "Gif description 2",
                price: 1500000
            }
        ],
        onClick: () => console.log("Project 5 clicked"),
    },
    {
        id: '6',
        title: "Project 6",
        tag: "Renewable energy",
        description: "Description of project 6",
        image: "/images/post.png",
        endDate: new Date("2026-05-31"),
        progress: 60,
        amount: 1200000,
        gif: [
            {
                id_gif: '11',
                img: "/images/post.png",
                title: "Project 6 - Gif 1",
                description: "Gif description 1",
                price: 600000
            },
            {
                id_gif: '12',
                img: "/images/post.png",
                title: "Project 6 - Gif 2",
                description: "Gif description 2",
                price: 600000
            }
        ],
        onClick: () => console.log("Project 6 clicked"),
    }
];

const payments = [
    { id: '1', value: 'qrcode', label: 'QR Bank Transfer', icon: <FaQrcode />, isAble: true },
    { id: '2', value: 'card', label: 'Credit/Debit Card', icon: <CiCreditCard1 />, isAble: true },
    { id: '3', value: 'wallet', label: 'E-Wallet (coming soon)', icon: <CiWallet />, isAble: false },
];


const ContributionForm = () => {
    const router = useRouter();
    const params = useParams();
    const projectId = params?.projectId || '2';

    const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
    const [customAmount, setCustomAmount] = useState<string>('');
    const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
    const [project, setProject] = useState<any>(null);

    useEffect(() => {
        const foundProject = projects.find(p => p.id === projectId);
        if (foundProject) {
            setProject(foundProject);
        }
    }, [projectId]);

    return (
        <Row gutter={[24, 24]}>
            <Row style={{ width: '100%' }}>
                <Card>
                    <Title level={5} style={{ marginBottom: '20px' }}>Select Contribution Amount</Title>
                    <Space direction="vertical" style={{ width: '100%' }}>
                        <Row>
                            {project?.gif.map((gif: any) => (
                                <>
                                    <Checkbox key={gif.id_gif}>
                                        <GifCard {...gif} onClick={() => setSelectedAmount(gif.price)} />
                                    </Checkbox>

                                </>
                            ))}
                        </Row>

                        <div style={{ padding: '16px' }}>
                            <Text strong>Custom Amount</Text>
                            <Input
                                prefix="$"
                                placeholder="Enter amount"
                                value={customAmount}
                                onChange={(e) => {
                                    setCustomAmount(e.target.value);
                                    setSelectedAmount(null);
                                }}
                                style={{ marginTop: '8px' }}
                            />
                        </div>
                    </Space>
                </Card>
            </Row>
            <Row style={{ width: '100%' }}>
                <Card style={{ width: '100%' }}>
                    <Title level={5} >Select Payment Method</Title>
                    <Radio.Group>
                        {payments.map((method) => (
                            <Radio disabled={!method.isAble} key={method.id} value={method.value} style={{ marginBottom: '16px' }}>
                                <Card style={{ display: 'flex', alignItems: 'center' }}>
                                    {method.icon}
                                    <span style={{ marginLeft: '8px' }}>{method.label}</span>
                                </Card>
                            </Radio>
                        ))}

                    </Radio.Group>
                </Card>
            </Row>
            <Row justify="end" style={{ marginTop: '24px', width: '100%' }}>
                <Link href={`/projects/${projectId}/contribute/legality`}>
                    <Button type="primary" htmlType="submit" >
                        Next <ArrowRightOutlined />
                    </Button>
                </Link>
            </Row>
        </Row>



    );
};

export default ContributionForm;
