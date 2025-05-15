'use client';
import { FC, useState, useEffect } from "react";
import Link from "next/link";
import { Button, Drawer, Flex, Layout, Menu, Typography, Avatar, Dropdown } from 'antd';
import { MenuOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';

interface UserType {
    name: string;
    email: string;
    role: string;
    phone: string;
    avatar_url: string;
}

const AppHeader: FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [user, setUser] = useState<UserType | null>(null);

    const menuItems = [
        { key: 'home', label: <Link href="/">Home</Link> },
        { key: 'projects', label: <Link href="/projects">Projects</Link> },
        { key: 'forum', label: <Link href="/forum">Forum</Link> },
        { key: 'contact', label: <Link href="/contact">Contact</Link> },
    ];

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);

        // Lấy user từ localStorage (nên để key chính xác, ví dụ 'user')
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch {
                setUser(null);
            }
        }

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    // Menu dropdown cho user khi login
    const userMenu = (
        <Menu>
            <Menu.Item key="profile" icon={<UserOutlined />}>
                <Link href="/profile">Profile</Link>
            </Menu.Item>
            <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
                Logout
            </Menu.Item>
        </Menu>
    );

    return (
        <Layout.Header style={{ padding: '0 40px', backgroundColor: 'var(--background-primary)', alignContent: 'center' }}>
            <Flex align="center" justify={isMobile ? "space-between" : "space-around"}>
                <Flex>
                    <Link href={'/'}>
                        <Typography.Title level={3} style={{ fontWeight: 'bold', margin: 0, cursor: 'pointer' }}>
                            <span style={{ color: 'var(--primary-color)' }}>Ecofund</span>X
                        </Typography.Title>
                    </Link>
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

                {/* Phần user/login/logout */}
                {!isMobile && (
                    <Flex gap={16} align="center">
                        {user ? (
                            <Dropdown overlay={userMenu} placement="bottomRight" arrow>
                                <Flex align="center" style={{ cursor: 'pointer' }}>
                                    <Avatar src={user.avatar_url} alt={user.name} style={{ marginRight: 8 }} />
                                    <Typography.Text strong>{user.name}</Typography.Text>
                                </Flex>
                            </Dropdown>
                        ) : (
                            <>
                                <Button type="primary" size="large">
                                    <Link href="/register/basicInfo">Register</Link>
                                </Button>
                                <Button type="default" size="large">
                                    <Link href="/login">Login</Link>
                                </Button>
                            </>
                        )}
                    </Flex>
                )}
            </Flex>
        </Layout.Header>
    );
};

export default AppHeader;
