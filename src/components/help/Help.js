import React from 'react';
import Intro from '../home/Intro'
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import { Items } from './Organisations'

const Help = (props) => {

    return (
        <main>
            <Intro />
            <Container>
                <Row>
                    <Col>
                        <h1>How you Can Help </h1>
                        <p className="text-primary">There are many charities and organistions that we have encountered during our time in treatment
                          and the subsequent aftermath of loss. Some are very close to our hearts. 
                        </p>
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
export default Help;