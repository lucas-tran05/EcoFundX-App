//Example of a footer component using Ant Design

'use client';
import { Typography, Row, Col, Space, theme as antdTheme  } from 'antd';

const { Text } = Typography;

const AppFooter = () => {
    const { token } = antdTheme.useToken()
    return (
        <Row justify="center" align="middle" style={{ backgroundColor: '#f0f0f0', padding: '20px' }} gutter={[16, 16]} >
            <Col>
                <Space direction="vertical" align="center">
                    <Text strong style={{ fontSize: '24px', color: token.colorPrimary }}>
                        EcoFundX
                    </Text>
                    <Text style={{ fontSize: '14px', color: '#000' }}>
                        All Rights Reserved © 2025
                    </Text>
                </Space>
            </Col>
        </Row>
    );
};

export default AppFooter;
