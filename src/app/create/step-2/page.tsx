'use client'
import { Button, Layout } from 'antd'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Step2 = (props: Props) => {
    return (
    <Layout.Content>
        <div>Step2</div>
        <Button type="default">
            <Link href="/create/step-1">Previous</Link>
        </Button>
        <Button type="primary">
            <Link href="/create/step-3">Next</Link>
        </Button>
    </Layout.Content>
    )
}

export default Step2