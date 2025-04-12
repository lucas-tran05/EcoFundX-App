'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Typography, Card, Checkbox, Button, Space } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;
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

const AgreementPage: React.FC = () => {
    const params = useParams();
    const projectId = params?.projectId
    const [rule1, setRule1] = useState(false);
    const [rule2, setRule2] = useState(false);
    const [rule3, setRule3] = useState(false);
    const [rule4, setRule4] = useState(false);


    const allAgreed = rule1 && rule2 && rule3 && rule4;

    return (
        <Card>
            <Title level={4}>Agreement</Title>
            <Paragraph type="secondary">
                Please read and agree to the following terms before proceeding.
            </Paragraph>

            {/* Eligibility and Investment Limits */}
            <Card
                style={{ marginBottom: '16px', backgroundColor: '#f9f9f9' }}
            >
                <Title level={5}>Eligibility and Investment Limits</Title>
                <Paragraph>
                    You must be at least 18 years old to contribute to projects on our platform.
                </Paragraph>
                <Paragraph>
                    If your annual income or net worth is less than $107,000, your investment limit is the greater of $2,200 or 5% of the lesser of your annual income or net worth in a 12-month period
                </Paragraph>
                <Paragraph>
                    If both your annual income and net worth exceed $107,000, you may invest up to 10% of the lesser of your annual income or net worth
                </Paragraph>
                <Paragraph>
                    The maximum aggregate amount you can invest across all crowdfunding offerings is $107,000 in a 12-month period, regardless of your income or net worth
                </Paragraph>
            </Card>
            <Checkbox
                checked={rule1}
                onChange={(e) => setRule1(e.target.checked)}
                style={{ marginBottom: '24px' }}
            >
                I have read and agree to the <Text strong>Eligibility and Investment Limits</Text>.
            </Checkbox>

            {/* Investor Responsibilities */}
            <Card
                style={{ marginBottom: '16px', backgroundColor: '#f9f9f9' }}
            >
                <Title level={5}>Investor Responsibilities</Title>
                <Paragraph>
                    You must complete all required Know Your Customer (KYC) documentation in compliance with Anti-Money Laundering regulations.
                </Paragraph>
                <Paragraph>
                    All contributions must be processed electronically through our platform; direct payments to project creators are prohibited.
                </Paragraph>
                <Paragraph>
                    You acknowledge that investments in crowdfunding projects involve risk, and returns are not guaranteed.
                </Paragraph>
                <Paragraph>
                    Securities purchased through crowdfunding generally cannot be resold for a period of one year.
                </Paragraph>
                <Paragraph>
                    You must carefully review all project information before investing and make informed decisions based on your own financial situation.
                </Paragraph>

            </Card>
            <Checkbox
                checked={rule2}
                onChange={(e) => setRule2(e.target.checked)}
                style={{ marginBottom: '24px' }}
            >
                I have read and agree to the <Text strong>Investor Responsibilities</Text>.
            </Checkbox>

            {/* Prohibited Activities */}
            <Card
                style={{ marginBottom: '16px', backgroundColor: '#f9f9f9' }}
            >
                <Title level={5}>Prohibited Activities</Title>
                <Paragraph>
                    You may not receive compensation for providing information about projects to other potential investors.
                </Paragraph>
                <Paragraph>
                    You may not engage in fraudulent or improper business practices related to any project on our platform.
                </Paragraph>
                <Paragraph>
                    You may not use the platform for money laundering or financing of terrorism.
                </Paragraph>
                <Paragraph>
                    You may not make false claims about projects or expected returns.
                </Paragraph>
                <Paragraph>
                    You may not create multiple accounts to circumvent investment limits.
                </Paragraph>
            </Card>
            <Checkbox
                checked={rule3}
                onChange={(e) => setRule3(e.target.checked)}
                style={{ marginBottom: '32px' }}
            >
                I have read and agree to the <Text strong>Prohibited Activities</Text>.
            </Checkbox>
            {/* Platform Usage */}
            <Card
                style={{ marginBottom: '16px', backgroundColor: '#f9f9f9' }}
            >
                <Title level={5}>Platform Usage</Title>
                <Paragraph>
                    All investments must be made through SEC-registered intermediaries (our platform).
                </Paragraph>
                <Paragraph>
                    You agree to use the platform in a respectful manner, refraining from posting offensive, discriminatory, or illegal content.
                </Paragraph>
                <Paragraph>
                    You understand that funds contributed to projects, even if the project does not reach its funding goal, will still be allocated to the project's stated purpose.
                </Paragraph>
                <Paragraph>
                    You acknowledge that our platform is not a "pass-through" entity to provide funding to other charities or organizations.
                </Paragraph>

            </Card>
            <Checkbox
                checked={rule4}
                onChange={(e) => setRule4(e.target.checked)}
                style={{ marginBottom: '32px' }}
            >
                I have read and agree to the <Text strong>Platform Usage</Text>.
            </Checkbox>

            <Space style={{ width: '100%', justifyContent: 'space-between' }}>
                <Link href={`/projects/${projectId}/contribute/amount`}>
                    <Button icon={<ArrowLeftOutlined />}>
                        Back
                    </Button>
                </Link>
                <Link href={`/projects/${projectId}/contribute/pay`}>
                    <Button type="primary" icon={<ArrowRightOutlined />} disabled={!allAgreed}>
                        Next
                    </Button>
                </Link>
            </Space>
        </Card>
    );
};

export default AgreementPage;
