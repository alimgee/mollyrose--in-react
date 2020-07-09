import React from 'react';
import { Container, Jumbotron } from 'reactstrap'

const Intro = () => {
    return (
        <section style={{backgroundColor:"black"}}>
            <Jumbotron>
                <Container>
                    <h1 className="display-4">Molly Rose</h1>
                    <div className="content">
                        <p className="lead">Driving awareness of childhood cancer
                        </p>
                        <a className="btn" href="/story/" style={{textAlign: "left"}} role="button">Mollys Story</a>
                    </div>
                </Container>
            </Jumbotron>
        </section>
    )
}

export default Intro
