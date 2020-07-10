import React from 'react'
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import molly from '../../assets/img/molly2.png'
import mollycol from '../../assets/img/molly1.png'

const Detail = (props) => {
    return(
        <Container fluid className="mb-4 mt-2">
                <Row>
                    <Col md="9" className="text-left text-primary" >
                    <p>11/11/2015 is a date forever burned into our minds,
                     the day we heard the 
                    news no parent ever wants to hear. Our precious Molly, of barely 10 months, 
                    was diagnosed with a stage 4 cancer. The immediate days blurred into each 
                    other as we got further details on Mollys condition and begun hearing words 
                    and medical terms we never knew existed. Treatment kicked off within days as 
                    we remained in a shocked haze barely coping and clinging on to whatever hope 
                    was offered before us.</p>
                    <p>It was during the early stages of this darkness 
                    that the supports that would prop us up revealed themselves. We found that 
                    people, some close to us, some we never knew, were to become the bedrock of 
                    our coping mechanisms. People offered themselves without question to help us 
                    in some way. I feel we would have been lost without that support.</p>
                    </Col>
                    <Col md="3" className="order-1 text-center">
                    <img className="rounded img-fluid story-img" alt="test" src={molly}/>
                    </Col>                 
                </Row>
                <Row>
                    <Col md="3" className="text-center order-2 order-md-1" >
                    <img className="rounded img-fluid story-img" alt="test" src={mollycol}/>
                    </Col>
                    <Col md="9" className="text-left text-primary order-1">
                    <p>It was during the early stages of this darkness 
                    that the supports that would prop us up revealed themselves. We found that 
                    people, some close to us, some we never knew, were to become the bedrock of 
                    our coping mechanisms. People offered themselves without question to help us 
                    in some way. I feel we would have been lost without that support.</p>
                    <p>It was during the early stages of this darkness 
                    that the supports that would prop us up revealed themselves. We found that 
                    people, some close to us, some we never knew, were to become the bedrock of 
                    our coping mechanisms. People offered themselves without question to help us 
                    in some way. I feel we would have been lost without that support.</p>
                    </Col>                 
                </Row>
                <Row>
                    <Col md="9" className="text-left text-primary">
                    <p>It was during the early stages of this darkness 
                    that the supports that would prop us up revealed themselves. We found that 
                    people, some close to us, some we never knew, were to become the bedrock of 
                    our coping mechanisms. People offered themselves without question to help us 
                    in some way. I feel we would have been lost without that support.</p>
                    <p>It was during the early stages of this darkness 
                    that the supports that would prop us up revealed themselves. We found that 
                    people, some close to us, some we never knew, were to become the bedrock of 
                    our coping mechanisms. People offered themselves without question to help us 
                    in some way. I feel we would have been lost without that support.</p>
                    </Col>
                </Row>
            </Container>
    )
}

export default Detail