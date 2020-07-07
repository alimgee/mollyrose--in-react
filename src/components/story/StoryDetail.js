import React from 'react'
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import img from '../../assets/img/img.png'

const Detail = (props) => {
    return(
        <Container className="mb-4 mt-2">
                <Row>
                    <Col md="9" className="order-2 order-md-1 text-center" >
                    <span style={{color:"black"}}>Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Necessitatibus debitis quos accusamus dignissimos consectetur placeat, rem
                            quasi ipsa maiores eos dolor veniam illum dolorum cumque nostrum aliquam sit cupiditate
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Necessitatibus debitis quos accusamus dignissimos consectetur placeat, rem
                            quasi ipsa maiores eos dolor veniam illum dolorum cumque nostrum aliquam sit cupiditate
                            molestias!Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Necessitatibus debitis quos accusamus dignissimos consectetur placeat, rem
                            quasi ipsa maiores eos dolor veniam illum dolorum cumque nostrum aliquam sit cupiditate</span>
                    </Col>
                    <Col md="3" className="order-1 text-center">
                    <img className="rounded img-fluid story-img " alt="test" src={img}/>
                    </Col>                 
                </Row>
                <Row>
                    <Col md="3" className="text-center" >
                    <img className="rounded img-fluid story-img" alt="test" src={img}/>
                    </Col>
                    <Col md="9" className="text-center">
                    <span style={{color:"black"}}>Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Necessitatibus debitis quos accusamus dignissimos consectetur placeat, rem
                            quasi ipsa maiores eos dolor veniam illum dolorum cumque nostrum aliquam sit cupiditate
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Necessitatibus debitis quos accusamus dignissimos consectetur placeat, rem
                            quasi ipsa maiores eos dolor veniam illum dolorum cumque nostrum aliquam sit cupiditate
                            molestias!Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Necessitatibus debitis quos accusamus dignissimos consectetur placeat, rem
                            quasi ipsa maiores eos dolor veniam illum dolorum cumque nostrum aliquam sit cupiditate</span>
                    </Col>                 
                </Row>
                <Row>
                    <Col>
                    <span style={{color:"black"}}>Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Necessitatibus debitis quos accusamus dignissimos consectetur placeat, rem
                            quasi ipsa maiores eos dolor veniam illum dolorum cumque nostrum aliquam sit cupiditate
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Necessitatibus debitis quos accusamus dignissimos consectetur placeat, rem
                            quasi ipsa maiores eos dolor veniam illum dolorum cumque nostrum aliquam sit cupiditate
                            molestias!Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Necessitatibus debitis quos accusamus dignissimos consectetur placeat, rem
                            quasi ipsa maiores eos dolor veniam illum dolorum cumque nostrum aliquam sit cupiditate</span>
                    </Col>
                </Row>
            </Container>
    )
}

export default Detail