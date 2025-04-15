'use client';
import React, { useState } from 'react';
import { message, Modal, DatePicker } from 'antd';
import { Layout, Flex, Button, Card, Input, Checkbox, Divider, Typography, Row, Col, Form, Image, Avatar, Space, Switch, Radio } from 'antd'; 
import { UserOutlined, FacebookFilled, TwitterOutlined, LinkedinFilled, CreditCardOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import Link from "next/link"; 

const { Text, Title, Paragraph } = Typography;

const initialProfileData = {
    fullName: 'John Cooper',
    username: 'johncooper',
    bio: '',
    facebookUrl: '',
    twitterUrl: '',
    linkedinUrl: '',
    email: 'john.cooper@example.com',
    phoneNumber: '+1 (555) 123-4567',
    twoFactorEnabled: false,
    preferredPayment: 'creditCard',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
};




const EditProfilePage: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const handleVerify = (field: string) => {
        console.log(`Verifying ${field}...`);
    };

    const [bankAccounts, setBankAccounts] = useState([
        {
          id: 1,
          number: '4242',
          expiry: '05/2025',
        },
    ]);

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    
    const [form] = Form.useForm(); 

    const handleAddNew = () => setIsAddModalOpen(true);

    const handleAddAccount = async () => {
    try {
        const values = await form.validateFields();
        const expiryValue = values.expiry ? values.expiry.format('MM/YYYY') : 'N/A';
        setBankAccounts([
        ...bankAccounts,
        {
            id: Date.now(),
            number: values.accountNumber.slice(-4),
            expiry: expiryValue, 
        },
        ]);
        message.success('Tài khoản đã được liên kết thành công!'); 
        setIsAddModalOpen(false);
        form.resetFields();
    } catch (error) {
        console.error("Add account failed:", error); 
    }
    };

    const showDeleteConfirm = (account: any) => setDeletingAccount(account);

    const [deletingAccount, setDeletingAccount] = useState<any>(null); 

    const handleDelete = () => {
        if (!deletingAccount) return;
        setBankAccounts(bankAccounts.filter(acc => acc.id !== deletingAccount.id));
        message.success('Đã xóa tài khoản thành công!');
        setDeletingAccount(null);
    };
    return (
        <Flex
            justify="center" 
            style={{
                padding: '32px 20px', 
                background: 'var(--background-primary)', 
                minHeight: '100vh',
            }}
        >
            <Flex
                vertical
                style={{
                    width: '100%',
                    maxWidth: '800px', 
                }}
            >
                {/* Page Header */}
                <Flex vertical style={{ marginBottom: '32px' }}>
                    <Title level={2} style={{ margin: 0, fontWeight: 600 }}>Edit Profile</Title>
                    <Text type="secondary">Manage your account settings and preferences.</Text>
                </Flex>

                {/* --- Form Start --- */}
                <Form
                    name="editProfile"
                    layout="vertical"
                    initialValues={initialProfileData}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    requiredMark={false} 
                >
                    {/* --- Profile Information Section --- */}
                    <Title level={4} style={{ marginBottom: '20px', fontWeight: 500 }}>Profile Information</Title>
                    <Row gutter={[24, 24]} style={{ marginBottom: '24px' }}>
                        <Col>
                            <Avatar size={80} src="#" icon={<UserOutlined />} />
                        </Col>
                        <Col>
                            <Flex vertical justify="center" style={{ height: '100%' }}>
                                <Button style={{ marginBottom: '8px' }}>Change Photo</Button>
                                <Button type="text" danger size="small">Remove</Button>
                            </Flex>
                        </Col>
                    </Row>

                    <Row gutter={24}>
                        <Col xs={24} sm={12}>
                            <Form.Item
                                label="Full Name"
                                name="fullName"
                                rules={[{ required: true, message: 'Please input your full name!' }]}
                            >
                                <Input placeholder="Enter your full name" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12}>
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input placeholder="Enter your username" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item
                        label="Bio"
                        name="bio"
                    >
                        <Input.TextArea rows={3} placeholder="Tell us a bit about yourself" />
                    </Form.Item>

                    {/* Social Media Links */}
                    <Text strong style={{ display: 'block', marginBottom: '16px', marginTop: '16px' }}>Social Media Links</Text>
                    <Form.Item name="facebookUrl">
                        <Input prefix={<FacebookFilled style={{ color: 'var(--tertiary-color)', marginRight: '8px' }} />} placeholder="Facebook profile URL" />
                    </Form.Item>
                    <Form.Item name="twitterUrl">
                        <Input prefix={<TwitterOutlined style={{ color: 'var(--tertiary-color)', marginRight: '8px' }} />} placeholder="Twitter profile URL" />
                    </Form.Item>
                    <Form.Item name="linkedinUrl">
                        <Input prefix={<LinkedinFilled style={{ color: 'var(--tertiary-color)', marginRight: '8px' }} />} placeholder="LinkedIn profile URL" />
                    </Form.Item>

                    <Divider />

                    {/* --- Contact & Security Section --- */}
                    <Title level={4} style={{ marginBottom: '20px', fontWeight: 500 }}>Contact & Security</Title>
                    <Form.Item label="Email Address" required>
                        <Row gutter={[8, 8]} align="middle">
                            <Col flex="auto">
                            <Form.Item
                                name="email"
                                noStyle
                                rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}
                            >
                                <Input placeholder="Enter your email address" />
                            </Form.Item>
                            </Col>
                            <Col>
                            <Button
                                type="primary"
                                onClick={() => handleVerify('email')}
                            >
                                Verify
                            </Button>
                            </Col>
                        </Row>
                    </Form.Item>

                    <Form.Item label="Phone Number" required>
                        <Row gutter={[8, 8]} align="middle">
                            <Col flex="auto">
                            <Form.Item
                                name="phoneNumber"
                                noStyle
                                rules={[{ required: true, message: 'Please input your phone number!' }]}
                            >
                                <Input placeholder="Enter your phone number" />
                            </Form.Item>
                            </Col>
                            <Col>
                            <Button
                                type="primary"
                                onClick={() => handleVerify('phone')}
                            >
                                Verify
                            </Button>
                            </Col>
                        </Row>
                    </Form.Item>


                    {/* Change Password */}
                    <Text strong style={{ display: 'block', marginBottom: '16px', marginTop: '16px' }}>Change Password</Text>
                    <Form.Item
                        name="currentPassword"
                        dependencies={['newPassword']}
                        rules={[
                            ({ getFieldValue }) => ({
                                required: !!getFieldValue('newPassword'),
                                message: 'Please input your current password!',
                            }),
                        ]}
                    >
                        <Input.Password placeholder="Current Password" />
                    </Form.Item>
                    <Form.Item
                        name="newPassword"
                        dependencies={['currentPassword']}
                        rules={[
                            ({ getFieldValue }) => ({
                                required: !!getFieldValue('currentPassword'),
                                message: 'Please input your new password!',
                            }),
                        ]}
                    >
                        <Input.Password placeholder="New Password" />
                    </Form.Item>
                    <Form.Item
                        name="confirmNewPassword"
                        dependencies={['newPassword']}
                        hasFeedback
                        rules={[
                            ({ getFieldValue }) => ({
                                required: !!getFieldValue('newPassword'),
                                message: 'Please confirm your new password!',
                            }),
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('newPassword') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password placeholder="Confirm New Password" />
                    </Form.Item>

                    {/* Two-Factor Authentication */}
                     <Divider style={{ marginTop: '24px'}}/>
                     <Row justify="space-between" align="middle" style={{ marginBottom: '24px' }}>
                         <Col>
                            <Text strong>Two-Factor Authentication</Text>
                            <Text type="secondary" style={{ display: 'block', fontSize: '12px' }}>Add an extra layer of security to your account</Text>
                         </Col>
                         <Col>
                            <Form.Item name="twoFactorEnabled" valuePropName="checked" noStyle>
                                <Switch />
                            </Form.Item>
                         </Col>
                     </Row>
                    <Divider />

                    {/* --- Payment & Withdrawal Section --- */}
                    <Title level={4} style={{ marginBottom: '20px'}}>Payment & Withdrawal</Title>
                    <Flex justify="space-between" align="center" style={{ marginBottom: '16px' }}>
                        <Text>Linked Bank Accounts</Text>
                        <Button type="link" icon={<PlusOutlined />} style={{ padding: 0 }} onClick={handleAddNew}>
                            Add New
                        </Button>
                    </Flex>
                    
                    {bankAccounts.map(account => (
                    <Card key={account.id} size="small" style={{ marginBottom: '24px', borderColor: 'var(--boder-color)' }}>
                        <Flex justify="space-between" align="center">
                        <Space>
                            <CreditCardOutlined style={{ fontSize: '20px', color: 'var(--text-tertiary)' }} />
                            <Flex vertical>
                            <Text>•••• •••• •••• {account.number}</Text>
                            <Text type="secondary" style={{ fontSize: '12px' }}>Expires {account.expiry}</Text>
                            </Flex>
                        </Space>
                        <Button
                            type="text"
                            danger
                            icon={<DeleteOutlined />}
                            size="small"
                            onClick={() => showDeleteConfirm(account)}
                        />
                        </Flex>
                    </Card>
                    ))}

                    <Form.Item
                        label="Preferred Payment Method"
                        name="preferredPayment"
                    >
                         <Radio.Group>
                            <Space direction="vertical">
                                <Radio value="creditCard">Credit/Debit Card</Radio>
                                <Radio value="bankTransfer">Bank Transfer</Radio>
                                <Radio value="paypal">PayPal</Radio>
                            </Space>
                        </Radio.Group>
                    </Form.Item>

                    {/* Modal Add New Bank Account */}
                    <Modal
                        title="Add Bank Account" 
                        open={isAddModalOpen}
                        onOk={handleAddAccount}
                        onCancel={() => setIsAddModalOpen(false)}
                        okText="Save" 
                        cancelText="Cancel"
                    >
                        <Form form={form} layout="vertical" name="addAccountForm">
                            <Form.Item
                                label="Account Number"
                                name="accountNumber"
                                rules={[{ required: true, message: 'Please enter your account number!' }]}
                            >
                                <Input maxLength={20} />
                            </Form.Item>
                            <Form.Item
                                label="Expiry Date" 
                                name="expiry"
                                rules={[{ required: true, message: 'Please select the expiry date!' }]} 
                            >
                                <DatePicker picker="month" format="MM/YYYY" style={{ width: '100%' }} />
                            </Form.Item>
                        </Form>
                    </Modal>

                    {/* Modal Confirm Delete */}
                    <Modal
                        title="Confirm Deletion" 
                        open={!!deletingAccount}
                        onOk={handleDelete}
                        onCancel={() => setDeletingAccount(null)}
                        okText="Delete" 
                        okButtonProps={{ danger: true }}
                        cancelText="Cancel" 
                    >
                        <p>Are you sure you want to delete the account <b>•••• {deletingAccount?.number}</b>?</p>
                    </Modal>

                    <Divider />

                    {/* --- Form Action Buttons --- */}
                    <Form.Item style={{ marginTop: '32px', marginBottom: '50px'}}> 
                        <Flex justify="end" gap="middle">
                            <Button>Cancel</Button>
                            <Button type="primary" htmlType="submit"> 
                                Save Changes
                            </Button>
                        </Flex>
                    </Form.Item>
                </Form>
                {/* --- Form End --- */}

            </Flex>
        </Flex>
    );
};

export default EditProfilePage;
