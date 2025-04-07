import { Metadata } from 'next';
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
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
        <ConfigProvider theme={theme}>
            <html lang="en" suppressHydrationWarning>
                <body>
                    <AntdRegistry >
                        <AppHeader />
                            {children}
                        <AppFooter />
                    </AntdRegistry>
                </body>
            </html>
        </ConfigProvider>
    );
}
