import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import Intro from '../home/Intro'
import Detail from './StoryDetail';
import { Helmet } from 'react-helmet'

const Story = () => {
    return (
        <main>
            <Helmet>
                <title>Mollys Story - mollyrose.ie</title>
                <meta name="description" content="Molly Roses story of her battle with Childhood Cancer" />

            </Helmet>
            <Intro />
            <Container className="mb-2">
                <Row>
                    <Col className="text-center">
                    <h1>Mollys Story </h1>
                    </Col>
                </Row>
            </Container>
            <Detail />
        </main>)
}

export default Story