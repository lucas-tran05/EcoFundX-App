'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Typography, Card, Checkbox, Button, Space } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const AgreementPage: React.FC = () => {
    const [termsAgreed, setTermsAgreed] = useState(false);
    const [privacyAgreed, setPrivacyAgreed] = useState(false);
    const [rulesAgreed, setRulesAgreed] = useState(false);

    const allAgreed = termsAgreed && privacyAgreed && rulesAgreed;

    const handleNext = () => {
        if (allAgreed) {
            console.log('Proceeding to next page...');
            // Implement next navigation
        } else {
            alert('You must agree to all terms before continuing.');
        }
    };

    const handleBack = () => {
        console.log('Going back...');
        // Implement back navigation
    };

    return (
        <Card bordered={false}>
            <Title level={4}>Agreement</Title>
            <Paragraph type="secondary">
                Please read and agree to the following terms before proceeding.
            </Paragraph>

            {/* Terms of Service */}
            <Card
                style={{ marginBottom: '16px', backgroundColor: '#f9f9f9' }}
                bodyStyle={{ padding: '16px' }}
            >
                <Title level={5}>Terms of Service</Title>
                <Paragraph>
                    By using our platform, you agree to comply with the terms and conditions outlined in this agreement. We reserve the right to change, modify, add, or remove parts of these Terms of Service at any time.
                </Paragraph>
                <Paragraph>
                    Our platform provides crowdfunding services for creative projects. We do not guarantee that any project will meet its fundraising goals or successfully fulfill its commitments.
                </Paragraph>
            </Card>
            <Checkbox
                checked={termsAgreed}
                onChange={(e) => setTermsAgreed(e.target.checked)}
                style={{ marginBottom: '24px' }}
            >
                I have read and agree to the <Text strong>Terms of Service</Text>.
            </Checkbox>

            {/* Privacy Policy */}
            <Card
                style={{ marginBottom: '16px', backgroundColor: '#f9f9f9' }}
                bodyStyle={{ padding: '16px' }}
            >
                <Title level={5}>Privacy Policy</Title>
                <Paragraph>
                    We respect your privacy and are committed to protecting the personal information you share with us. This policy describes how we collect, use, and disclose your information.
                </Paragraph>
                <Paragraph>
                    We may collect personal information such as your name, email address, billing address, and bank account details. This information is used to provide services, process transactions, and communicate with you.
                </Paragraph>
            </Card>
            <Checkbox
                checked={privacyAgreed}
                onChange={(e) => setPrivacyAgreed(e.target.checked)}
                style={{ marginBottom: '24px' }}
            >
                I have read and agree to the <Text strong>Privacy Policy</Text>.
            </Checkbox>

            {/* Community Rules */}
            <Card
                style={{ marginBottom: '16px', backgroundColor: '#f9f9f9' }}
                bodyStyle={{ padding: '16px' }}
            >
                <Title level={5}>Community Rules</Title>
                <Paragraph>
                    Our platform is built on respect, transparency, and responsibility. By using our services, you agree not to post content that is offensive, discriminatory, or illegal.
                </Paragraph>
                <Paragraph>
                    All project creators must provide accurate information about their projects and use the raised funds as intended. Failure to comply may result in account suspension and legal actions.
                </Paragraph>
            </Card>
            <Checkbox
                checked={rulesAgreed}
                onChange={(e) => setRulesAgreed(e.target.checked)}
                style={{ marginBottom: '32px' }}
            >
                I have read and agree to the <Text strong>Community Rules</Text>.
            </Checkbox>

            <Space style={{ width: '100%', justifyContent: 'space-between' }}>
                <Button icon={<ArrowLeftOutlined />} href="/create/rewards" onClick={handleBack}>
                    Back
                </Button>
                <Button type="primary" icon={<ArrowRightOutlined />} href="/create/review" onClick={handleNext} disabled={!allAgreed}>
                    Next
                </Button>
            </Space>
        </Card>
    );
};

export default AgreementPage;
