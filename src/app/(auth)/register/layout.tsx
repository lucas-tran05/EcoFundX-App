'use client';
import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const LayoutRegister: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Layout style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>

            {/* Header */}
            <Header style={{ backgroundColor: '#ffffff', textAlign: 'center', padding: '20px 0' }}>
                <Title level={3} style={{ fontSize: '40px', color: '#51A27F', margin: 0 }}>EcoFundX</Title>
                <Text style={{ fontSize: '16px', color: '#888' }}>Join our sustainable crowdfunding community</Text>
            </Header>

            {/* Main Content */}
            <Content style={{ padding: '40px 20px' }}>
                <Row justify="center">
                    <Col xs={24} sm={24} md={16} lg={12}>
                        {children}
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
};

export default LayoutRegister;