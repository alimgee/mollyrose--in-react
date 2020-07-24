import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import Intro from '../home/Intro'
import TwitterContainer from './Twitter'
import { Helmet } from 'react-helmet'


const About = () => {
    return (
        <main>
            <Helmet>
                <title>About Us - mollyrose.ie</title>
                <meta name="description" content="Information about who we are and who Molly Rose was and reason for a childhood cancer site like mollyrose.ie" />

            </Helmet>
            <Intro />
            <Container className="mb-2">
                <Row>
                    <Col className="text-center">
                        <h1>About Us</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md="4" className="text-center">
                        <TwitterContainer />
                    </Col>
                    <Col md="8" className="text-left">
                        <p><span className="first-character">I</span>n 2015 we first walked the halls of St Johns ward for peadiatric cancer and became
                        part of that small group of families who know what it is to try to deal with a
                        childhood cancer diagnosis. We will never forget the bravery of the many children
                        we met on those corridors. We will also remember the health care professionals that
                        looked after Molly and done thier best to help her beat this insidious horrific disease
                        </p>
                        <p>
                            We created this site with the aim to drive awareness of childhood cancer as before out
                            journey we were ignorant to the world of peadiatric cancer.
                        </p>
                        <p>
                            This is our way of
                            giving back a little bit and trying to preserve the memory of our beautiful
                            much loved daughter. This is Molly Roses legacy.
                        </p>
                    </Col>

                </Row>
            </Container>
        </main>)
}

export default About