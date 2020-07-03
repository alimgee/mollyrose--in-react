import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import Intro from '../home/Intro'
import Detail from './StoryDetail';

const Story = () => {
    return (
        <main>
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