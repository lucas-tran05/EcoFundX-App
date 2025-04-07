    'use client';
    import { FC, useState, useEffect } from "react";
    import Link from "next/link";
    import { Button, Drawer, Flex, Layout, Menu, Typography } from 'antd';
    import { MenuOutlined } from '@ant-design/icons';

    const AppHeader: FC = () => {
        const [isMobile, setIsMobile] = useState(false);
        const [drawerVisible, setDrawerVisible] = useState(false);

        const menuItems = [
            {
                key: 'home',
                label: <Link href="/">Home</Link>,
            },
            {
                key: 'projects',
                label: <Link href="/projects">Projects</Link>,
            },
            {
                key: 'forum',
                label: <Link href="/forum">Forum</Link>,
            },
            {
                key: 'contact',
                label: <Link href="/contact">Contact</Link>,
            },
        ];

        useEffect(() => {
            const handleResize = () => {
                setIsMobile(window.innerWidth < 768);
            };

            handleResize();
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, []);

        return (
            <Layout.Header style={{ padding: '0 40px', backgroundColor: 'var(--background-primary)', alignContent: 'center' }}>
                <Flex align="center" justify="space-between">
                    <Flex>
                        <Typography.Title level={3} style={{ fontWeight: 'bold', margin: 0 }}>
                            <span style={{ color: 'var(--primary-color)' }}>Ecofund</span>X
                        </Typography.Title>
                    </Flex>

                    {!isMobile ? (
                        <Flex>
                            <Menu
                                className="menu-header"
                                mode="horizontal"
                                defaultSelectedKeys={['home']}
                                style={{ width: '100%', border: 'none' }}
                                items={menuItems}
                            />
                        </Flex>
                    ) : (
                        <Flex>
                            <Button
                                icon={<MenuOutlined />}
                                type="text"
                                onClick={() => setDrawerVisible(true)}
                            />
                            <Drawer
                                title="Menu"
                                placement="right"
                                onClose={() => setDrawerVisible(false)}
                                open={drawerVisible}
                            >
                                <Menu
                                    mode="vertical"
                                    defaultSelectedKeys={['home']}
                                    items={menuItems}
                                    onClick={() => setDrawerVisible(false)}
                                />
                            </Drawer>
                        </Flex>
                    )}

                    {!isMobile && (
                        <Flex gap={16}>
                            <Button type="primary" size="large">
                                <Link href="/register">Register</Link>
                            </Button>
                            <Button type="default" size="large">
                                <Link href="/login">Login</Link>
                            </Button>
                        </Flex>
                    )}
                </Flex>
            </Layout.Header>
        );
    };

    export default AppHeader;
