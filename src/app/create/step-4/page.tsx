'use client'
import { Button, Layout } from 'antd'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Step4 = (props: Props) => {
    return (
    <Layout.Content>
        <div>Step4</div>
        <Button type="default">
            <Link href="/create/step-3">Previous</Link>
        </Button>
        <Button type="primary">
            Done
        </Button>
    </Layout.Content>
    )
}

export default Step4