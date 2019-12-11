import React from "react";
import PropTypes from 'prop-types';
import './styles.css';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

const CardModal = (props) => {
  const {text, imgItems, eventName, eventDescription} = props;
  return (
    <div>
      <Container className="Card">
      <CardTitle style={{fontFamily:'Arial Narrow', fontWeight:'bold'}}>{eventName}</CardTitle>
        <Row>
          <Col className="col1">
          <div className="big">
            <CardImg
              top
              {...imgItems}
            />
          </div>
          </Col>
          <Col>
            {/* <CardSubtitle>{eventDescription}</CardSubtitle> */}
            <CardText>
            {eventDescription}
            </CardText>
          </Col>
          <Col>
            Registered User
          </Col>
        </Row>
        <Row style={{paddingLeft: "85%"}}><Button>Order Here</Button></Row>
      </Container>
    </div>
  );
};
CardModal.propTypes = {
  text: PropTypes.string,
  imgItems: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string
  }),
  eventName: PropTypes.string,
  eventDescription: PropTypes.string
};
CardModal.defaultProps = {
  text: '',
  eventName: '',
  eventDescription: '',
  imgItems: {
    src: '',
    alt: ''
  }
};
export default CardModal;