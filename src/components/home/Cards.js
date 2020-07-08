import React from 'react'
import img from '../../assets/img/img.png'
import crumlin from '../../assets/img/crumlin2.jpg'
import events from '../../assets/img/events.png'
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
            <Container fluid className="mb-4">
                <Row>
                    <Col md="4" className="mb-4">
                        <Card>
                            <CardHeader><h3>Featured</h3></CardHeader>
                            <CardImg variant="top" src={img} className="img-fluid rounded" />
                            <CardBody>
                                <CardText>
                                    With supporting text below as a natural lead-in to additional content.</CardText>
                                <a className="btn" href="/" style={{ textAlign: "left" , marginTop:"11.5rem"  }} role="button">Learn more</a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4" className="mb-4">
                        <Card>
                            <CardHeader><h3>How Can I Help?</h3></CardHeader>
                            <CardImg variant="top" src={crumlin} className="img-fluid rounded"/>
                            <CardBody>
                            <div className="card-text" ><h6 style={{fontFamily:"Roboto Mono"}}>Donating blood, helping out charitys, raising funds </h6></div>
                                <CardText >
                                    There are many organisations and charitys that provide much needed support. From assisting the children themselves to 
                                    supporting families affected by a childhood cancer diagnosis</CardText>
                                <a className="btn" href="/" style={{ textAlign: "left" }} role="button">Learn more</a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4" className="mb-4">
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