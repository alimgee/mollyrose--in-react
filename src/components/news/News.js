import React from 'react'
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import Intro from '../home/Intro'
import { Items } from './Articles'

const News = (props) => {

    return (
        <main>
            <Intro />
            <Container>
                <Row>
                    <Col>
                        <h1>News & Events </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Items />
                    </Col>
                </Row>
            </Container>
        </main>
    )

}

export default News