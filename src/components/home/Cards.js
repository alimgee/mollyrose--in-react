import React from 'react'
import crumlin from '../../assets/img/crumlin2.png'
import events from '../../assets/img/events.png'
import ballons from '../../assets/img/cancer-module.png'
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
import {FirstArticle} from '../news/FirstArticle'

const CardSection = (props) => {

    return (
        <section>
            <Container className="mb-4">
                <Row>
                    <Col lg="4" className="mb-4">
                        <Card>
                            <CardHeader><h3>Tell me more</h3></CardHeader>
                            <CardImg variant="top" src={ballons} className="card-img img-fluid rounded" />
                            <CardBody>
                            <div className="card-text" ><h6 style={{fontFamily:"Roboto Mono"}}>Childhood Cancer causes, signs and symptoms</h6></div>
                                <CardText>
                                    There are many types of diseases that are classed Childhood Cancer. The causes are manifold and in some cases largley unknown.
                                    However be assured that Childhood Cancer is very rare.<br/>&nbsp;
                                </CardText>
                                <a className="btn" href="/childhoodcancer/" style={{ textAlign: "left"  }} role="button">Learn more</a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="4" className="mb-4">
                        <Card>
                            <CardHeader><h3>How Can I Help?</h3></CardHeader>
                            <CardImg variant="top" src={crumlin} className="img-fluid rounded"/>
                            <CardBody>
                            <div className="card-text" ><h6 style={{fontFamily:"Roboto Mono"}}>Donating blood, helping out charitys, raising funds </h6></div>
                                <CardText >
                                    There are many organisations and charitys that provide much needed support. From assisting the children themselves to 
                                    supporting families affected by a childhood cancer diagnosis</CardText>
                                <a className="btn" href="/helpout/" style={{ textAlign: "left" }} role="button">Learn more</a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="4" className="mb-4">
                        <Card>
                            <CardHeader><h3>News & Events</h3></CardHeader>
                            <CardImg variant="top" src={events} className="img-fluid rounded" />
                            <CardBody>
                            <FirstArticle/>
                                <a className="btn" href="/news/" style={{ textAlign: "left" }} role="button">Browse News</a>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
 
}

export default CardSection