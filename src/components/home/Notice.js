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
                                    <h2>Give blood, save a childs life</h2>
                                    <p>Blood Donations are essential during the treatment of childhood cancer. During lockdown the Irish Blood
                                    transfusion board continue to need your help.
                                   </p>
                                    <p><i class="fa fa-tint mr-2" aria-hidden="true"></i>
                                        <a href="https://www.giveblood.ie/Find-a-Clinic/Clinic-Finder/" target="_blank" rel="noopener noreferrer">Find a Clinic</a>
                                    </p>
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