'use client';

import Image from 'next/image';
import { Layout, Button, Typography } from 'antd';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Error404({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const router = useRouter();

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <Layout style={{ minHeight: '100vh', padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Image
                src="/images/404.png"
                alt="Error"
                width={300}
                height={300}
            />
            <Typography.Title level={3}>404 Not Found!</Typography.Title>
            <Typography.Paragraph>
                Oops! Looks like this page has wandered off to save some trees.
            </Typography.Paragraph>
            <Button
                type="primary"
                size="large"
                onClick={() => router.push('/')}
                style={{ marginTop: '16px' }}
            >
                Back to home page
            </Button>
        </Layout>
    );
}
