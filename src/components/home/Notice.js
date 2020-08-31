import React from 'react'
import {
    Container,
    Row,
    Col,
    CardText,
    Card,
    CardHeader,
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
                                <h2>Head Shave Event!!!</h2>
                                    The 3rd of September will be Molly Roses 4th anniversary, so in memory
                                    of our darling hero and to raise funds for Aoibheans Pink Tie, I will be participating
                                    in the shaving of my always perfect locks.  If you wish to contribute you can do so via the
                                    idonate link below.
                                </CardText>
                                <a title="Donate to Head Shave event" className="btn" href="https://www.idonate.ie/AlanMcGee" style={{ textAlign: "left"  }} role="button">Donate Now!</a>
                            </CardBody>
                        </Card>
                    </Col>                   
                </Row>
            </Container>
        </section>
    )
 
}

export default NoticeSection