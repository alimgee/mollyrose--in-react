import React from 'react'
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

const Quote = () => {
    return(
        <section>
            <Container>
                <Row>
                    <Col>
                    <blockquote><span class="">" Lorem ipsum dolor sit amet consectetur 
                            adipisicing el Fugit nisi beatae repellat recusandae rerum 
                            s dolore ex esse architecto inventore"</span></blockquote> 
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Quote