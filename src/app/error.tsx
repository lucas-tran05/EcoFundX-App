'use client';

import Image from 'next/image';
import { Layout, Button, Typography } from 'antd';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Error({
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
        <Layout style={{ minHeight: '95vh', padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Image
                src="/images/error.png"
                alt="Error"
                width={250}
                height={250}
                style={{ marginBottom: '24px', borderRadius: '50%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
            />
            <Typography.Title level={3}>Something went wrong!</Typography.Title>
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
