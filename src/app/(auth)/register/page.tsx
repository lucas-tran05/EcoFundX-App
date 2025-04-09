'use client';
import React from 'react';
import { Layout, Button, Card, Steps, Divider, List, Typography, Row, Col } from 'antd';
import { BulbFilled, GoogleOutlined, FacebookFilled, LinkedinFilled } from '@ant-design/icons';

const { Step } = Steps;
const { Text } = Typography;

const RegisterPage: React.FC = () => {
    return (
        <Card
            style={{
                maxWidth: 860,
                margin: '40px auto',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
        >
            {/* Steps */}
            <Steps current={0} size="small" style={{ marginBottom: '20px ' }}>
                <Step title="Account Type" />
                <Step title="Basic Info" />
                <Step title="Additional Info" />
            </Steps>

            {/* Account Type Selection */}
            <Row gutter={16} style={{ marginBottom: '20px' }}>
                <Col span={12}>
                    <Card
                        hoverable
                        className="horizontal-align"
                        style={{
                            borderColor: '#2db47c',
                            backgroundColor: '#f6ffed',
                        }}
                    >
                        <Button 
                            icon={<BulbFilled style={{ fontSize: 30, color: '#51A27F' }} />} 
                            style={{ border: 'none', backgroundColor: '#f6ffed' }}
                        />
                        <div>
                            <Text strong style={{ fontSize: '20px'}}>Project Creator</Text>
                            <br />
                            Nhà kêu gọi vốn
                        </div>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card
                        hoverable
                        className="horizontal-align"
                        style={{
                            borderColor: '#2db47c',
                            backgroundColor: '#f6ffed',
                        }}
                    >
                        <Button 
                            icon={<BulbFilled style={{ fontSize: 30, color: '#51A27F' }} />} 
                            style={{ border: 'none', backgroundColor: '#f6ffed' }}
                        />
                        <div>
                            <Text strong style={{ fontSize: '20px'}}>Investor</Text>
                            <br />
                            Người đóng góp
                        </div>
                    </Card>
                </Col>
            </Row>

            {/* Continue Button */}
            <Button type="primary" size="large" block style={{ width: '200px', alignSelf: 'flex-end' }}>
                Continue →
            </Button>

            {/* Social Media Sign-Up */}
            <Divider style={{ marginTop: '50px'}}>Or sign up with</Divider>
            <Row justify="center" gutter={16} >
                <Col>
                    <Button icon={<GoogleOutlined style={{ fontSize: 20 }}/>} size="large" block style={{ width: '120px' }}>
                    Google
                    </Button>     
                </Col>
                <Col>
                    <Button icon={<FacebookFilled style={{ fontSize: 20, color: '#3662E3' }}/>} size="large" block style={{ width: '120px' }}>
                    Facebook
                    </Button>
                </Col>
                <Col>
                    <Button icon={<LinkedinFilled style={{ fontSize: 20, color: '#3662E3' }}/>} size="large" block style={{ width: '120px' }}>
                    Linkedln
                    </Button>
                </Col>
            </Row>

            {/* Login Link */}
            <p style={{ marginTop: '20px', textAlign: 'center' }}>
                Already have an account?{' '}
                <a href="/login" style={{ color: '#2db47c' }}>
                    Log in here
                </a>
            </p>
        </Card>
    );
};

export default RegisterPage;
