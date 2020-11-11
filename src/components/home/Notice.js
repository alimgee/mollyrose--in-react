import React from 'react'
import {
    Container,
    Row,
    Col,
    CardText,
    Card,
    CardBody,
} from 'reactstrap';


const NoticeSection = (props) => {

    return (
        <section>
            <Container className="mb-2">
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <CardText>
                                <h2>Charity Christmas Cards!!!</h2>
                                   <p>Its beginning to look a lot like christmas! If you are planning on sending christmas cards this
                                    year why not send cards that will raise funds for childhood cancer. Here are some online links below
                                    or you can keep and eye out in  your local bookshops.</p>
                                    <p><a href="https://www.cardgallery.ie/collections/christmas-cards/products/christmas-card-santas-sleigh-flying-over-town-charity-aoibheanns-pink-tie-6-pack" target="_blank" rel="noopener noreferrer">Aoibheanns Pink Tie</a></p>
                                    <p><a href="https://www.childreninhospital.ie/orderform/" target="_blank" rel="noopener noreferrer">Children in Hospital</a></p>
                                    <p><a href="https://rmhc.ie/what-we-do/shop/Christmas-Cards-%E2%80%93-Pack-of-10-%E2%80%93-Includes-Delivery-p251923990" target="_blank" rel="noopener noreferrer">Ronald McDonald House</a></p>
                                </CardText>
                               
                            </CardBody>
                        </Card>
                    </Col>                   
                </Row>
            </Container>
        </section>
    )
 
}

export default NoticeSection