import React from 'react'
import { Card,Col,Flex, Row, Image, Typography } from 'antd'

interface Props {
    id_gif: string
    img: string
    title: string
    description: string
    price: number
    onClick?: () => void
}

const GifCard: React.FC<Props> = ({ id_gif, img, title, description, price, onClick }) => {
    return (
        <Card style={{marginBottom: '8px'}}>
            <Row align={"middle"} gutter={[16, 16]} >
                <Col span={4}>
                    <Image src={img} preview={false} />
                </Col>
                <Col span={20}>
                    <Flex vertical>
                        <Typography.Text strong>{title}</Typography.Text>
                        <Typography.Text>{description}</Typography.Text>
                        <Typography.Text>₫{(price || 0 / 100).toLocaleString('vi-VN')}</Typography.Text>
                    </Flex>
                </Col>
            </Row>
        </Card>
    )
}

export default GifCard
