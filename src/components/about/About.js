import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import Intro from '../home/Intro'


const About = () => {
    return (
        <main>
            <Intro />
            <Container className="mb-2">
                <Row>
                    <Col className="text-center">
                    <h1>About</h1>
                    </Col>
                </Row>
            </Container>
        </main>)
}

export default About