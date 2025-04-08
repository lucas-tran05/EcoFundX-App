'use client'
import { Button, Layout } from 'antd'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Step3 = (props: Props) => {
    return (
    <Layout.Content>
        <div>Step3</div>
        <Button type="default">
            <Link href="/create/step-2">Previous</Link>
        </Button>
        <Button type="primary">
            <Link href="/create/step-4">Payment</Link>
        </Button>
    </Layout.Content>
    )
}

export default Step3