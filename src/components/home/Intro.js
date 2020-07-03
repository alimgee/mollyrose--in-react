import React from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap'

const Intro = () => {
    return (
        <section style={{backgroundColor:"black"}}>
            <Jumbotron>
                <Container>
                    <h1 className="display-4">Header 1</h1>
                    <div className="content">
                        <p className="lead">Lorem ipsum dolor sit amet debitis maiores vitae asperiores?
                        </p>
                        <a className="btn" href="/" style={{textAlign: "left"}} role="button">Learn more</a>
                    </div>
                </Container>
            </Jumbotron>
        </section>
    )
}

export default Intro
