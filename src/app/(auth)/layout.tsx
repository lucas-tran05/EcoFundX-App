import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import { ConfigProvider } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import theme from '@/styles/themeConfig';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <ConfigProvider theme={theme}>
            <AntdRegistry>
                {children}
                <AppFooter />
            </AntdRegistry>
        </ConfigProvider>
    );
}
