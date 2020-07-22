import React from 'react'
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import Intro from '../home/Intro'
import { Items } from './Articles'
import TwitterContainer from '../about/Twitter'

const News = () => {

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
                    <Col md="8">
                        <Items />
                    </Col>
                    <Col md="4">
                        <TwitterContainer />
                    </Col>
                </Row>
            </Container>
        </main>
    )

}

export default News