import React from 'react'
import img from '../../assets/img/img.png'
import {
    Container,
    Row,
    Col,
    CardText,
    Card,
    CardImg,
    CardHeader,
    CardBody,
} from 'reactstrap';

const CardSection = (props) => {
    return (
        <section>
            <Container className="mb-4">
                <Row>
                    <Col md="4" className="mb-4">
                        <Card>
                            <CardHeader><h3>Featured</h3></CardHeader>
                            <CardImg variant="top" src={img} className="img-fluid rounded" />
                            <CardBody>
                                <CardText>
                                    With supporting text below as a natural lead-in to additional content.</CardText>
                                <a className="btn" href="/" style={{ textAlign: "left" }} role="button">Learn more</a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4" className="mb-4">
                        <Card>
                            <CardHeader><h3>Featured</h3></CardHeader>
                            <CardImg variant="top" src={img} className="img-fluid rounded"/>
                            <CardBody>
                                <CardText>
                                    With supporting text below as a natural lead-in to additional content.</CardText>
                                <a className="btn" href="/" style={{ textAlign: "left" }} role="button">Learn more</a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4" className="mb-4">
                        <Card>
                            <CardHeader><h3>Featured</h3></CardHeader>
                            <CardImg variant="top" src={img} className="img-fluid rounded" />
                            <CardBody>
                                <CardText>
                                    With supporting text below as a natural lead-in to additional content.</CardText>
                                <a className="btn" href="/" style={{ textAlign: "left" }} role="button">Learn more</a>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CardSection