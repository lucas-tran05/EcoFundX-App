'use client'
import { Button, Layout } from 'antd'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Step1 = (props: Props) => {
    return (
    <Layout.Content>
        <div>Step1</div>
        <Button type="primary">
            <Link href="/create/step-2">Next</Link>
        </Button>
    </Layout.Content>
    )
}

export default Step1