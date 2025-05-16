import { Metadata } from 'next';
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import FloatAI from '@/components/FloatAI';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import '../styles/globals.css';
import theme from '../styles/themeConfig';

export const metadata: Metadata = {
    title: 'EcofundX',
    description: 'A platform for eco-friendly projects',
    icons: {
        icon: '/favicon.png',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
            </head>
            <body>
                <ConfigProvider theme={theme}>
                    <AntdRegistry>
                        {children}
                        <FloatAI />

                    </AntdRegistry>
                </ConfigProvider>
            </body>
        </html>
    );
}
