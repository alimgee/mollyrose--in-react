import React from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap'

const Intro = () => {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 class="display-4">Header 1</h1>
                    <div className="content">
                        <p className="lead">Lorem ipsum dolor sit amet debitis maiores vitae asperiores?
                        </p>
                        <a className="btn" href="/" style={{textAlign: "left"}} role="button">Learn more</a>
                    </div>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Intro
