'use client';
import { FC } from "react";
import Link from "next/link";
import { Button, Flex, Layout, Menu, Typography} from 'antd';

const AppHeader: FC = () => {
    return (
        <Layout.Header style={{ padding: '0 40px', backgroundColor: 'var(--background-primary)' }}>
            <Flex align="center" justify="space-between">
                <Flex>
                    <Typography.Title level={3} style={{ fontWeight: 'bold', margin: 0 }}>
                        <span style={{ color: 'var(--primary-color)' }}>Ecofund</span>X
                    </Typography.Title>
                </Flex>

                <Flex>
                    <Menu
                        mode="horizontal"
                        defaultSelectedKeys={['home']} // Mặc định chọn Home
                        style={{ width: '100%', border: 'none' }}
                    >
                        <Menu.Item key="home">
                            <Link href="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="projects">
                            <Link href="/projects">Projects</Link>
                        </Menu.Item>
                        <Menu.Item key="forum">
                            <Link href="/forum">Forum</Link>
                        </Menu.Item>
                        <Menu.Item key="contact">
                            <Link href="/contact">Contact</Link>
                        </Menu.Item>
                    </Menu>
                </Flex>

                <Flex>
                    <Button type="primary"  style={{ marginRight: '10px' }}>
                        <Link href="/register">Register</Link>
                    </Button>
                    <Button type="default" >
                        <Link href="/login">Login</Link>
                    </Button>
                </Flex>
            </Flex>
        </Layout.Header>
    );
};

export default AppHeader;
