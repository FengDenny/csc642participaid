import React from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Image,
  Card,
  ListGroup,
} from "react-bootstrap";
import { FaCheck, FaTimes } from "react-icons/fa";
export default function Cards(props) {
  return (
    <Container className='card-container '>
      <Card className='card'>
        {props.price ? (
          <Card.Title
            as='h5'
            className='price-banner d-flex justify-content-center'
          >
            {props.price}
          </Card.Title>
        ) : null}

        <Card.Header className='card-header-css primary-font'>
          {props.title}
        </Card.Header>
        <Card.Body>
          <Card.Title>{props.participants}</Card.Title>
          <Card.Title className='title-header'>{props.eligibility}</Card.Title>
          <Row>
            <Col xs={6}>
              {props.eligibleOne ? (
                <Card.Body>
                  <FaCheck className='green-color' /> {props.eligibleOne}
                </Card.Body>
              ) : null}
              {props.eligibleTwo ? (
                <Card.Body>
                  <FaCheck className='green-color' /> {props.eligibleTwo}
                </Card.Body>
              ) : null}
              {props.eligibleThree ? (
                <Card.Body>
                  <FaCheck className='green-color' /> {props.eligibleThree}
                </Card.Body>
              ) : null}
              {props.eligibleFour ? (
                <Card.Body>
                  <FaCheck className='green-color' /> {props.eligibleFour}
                </Card.Body>
              ) : null}
            </Col>
            <Col xs={6}>
              {props.ineligibleOne ? (
                <Card.Body>
                  <FaTimes className='red-color' /> {props.ineligibleOne}
                </Card.Body>
              ) : null}
              {props.ineligibleTwo ? (
                <Card.Body>
                  <FaTimes className='red-color' /> {props.ineligibleTwo}
                </Card.Body>
              ) : null}
              {props.ineligibleThree ? (
                <Card.Body>
                  <FaTimes className='red-color' /> {props.ineligibleThree}
                </Card.Body>
              ) : null}
              {props.ineligibleFour ? (
                <Card.Body>
                  <FaTimes className='red-color' /> {props.ineligibleFour}
                </Card.Body>
              ) : null}
            </Col>
          </Row>
        </Card.Body>
        <Button variant='primary' className='card-primary-color-btn'>
          LEARN MORE
        </Button>
      </Card>
    </Container>
  );
}