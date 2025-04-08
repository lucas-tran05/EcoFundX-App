'use client';
import React from 'react';
import { Skeleton } from 'antd';

const Loading: React.FC = () => {
    return (
        <div style={{ padding: '32px' }}>
            <Skeleton avatar paragraph={{ rows: 8 }} />;
        </div>
    )
}

export default Loading;