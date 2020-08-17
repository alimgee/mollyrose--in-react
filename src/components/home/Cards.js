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
                            <CardHeader><h2>Tell me more</h2></CardHeader>
                            <CardImg variant="top" alt="balloons floating into the sky" src={ballons} className="card-img img-fluid rounded" />
                            <CardBody>
                            <div className="card-text" ><h3 className="news-header" style={{fontFamily:"Roboto Mono"}}>Childhood Cancer causes, signs and symptoms</h3></div>
                                <CardText>
                                    There are many types of diseases that are classed Childhood Cancer. The causes are manifold and in some cases largley unknown.
                                    However be assured that Childhood Cancer is very rare.
                                </CardText>
                                <a title="Find out more information about Childhood Cancer" className="btn" href="/childhoodcancer/" style={{ textAlign: "left"  }} role="button">Learn more</a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="4" className="mb-4">
                        <Card>
                            <CardHeader><h2>How Can I Help?</h2></CardHeader>
                            <CardImg variant="top" alt="Crumlin Childrens Hospital" src={crumlin} className="img-fluid rounded"/>
                            <CardBody>
                            <div className="card-text" ><h3 className="news-header" style={{fontFamily:"Roboto Mono"}}>Donating blood and helping out charitys </h3></div>
                                <CardText >
                                    There are many organisations and charitys that provide much needed support. From assisting the children themselves to 
                                    supporting families affected by a childhood cancer diagnosis</CardText>
                                <a title="Find out the many ways to help" className="btn" href="/helpout/" style={{ textAlign: "left" }} role="button">Learn more</a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="4" className="mb-4">
                        <Card>
                            <CardHeader><h2>News & Events</h2></CardHeader>
                            <CardImg variant="top" alt="Colourful chalk pieces" src={events} className="img-fluid rounded" />
                            <CardBody>
                            <FirstArticle/>
                                <a title="Find out the latest news on Childhood Cancer" className="btn" href="/news/" style={{ textAlign: "left" }} role="button">Browse News</a>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
 
}

export default CardSection