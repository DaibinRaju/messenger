import { Col, Image, Row, Div } from "atomize";
import React from "react";

export default class ContactItem extends React.Component {
  render() {
    return (
      <Div p="1rem">
        <Row>
          <Col size={2}>
            <Image
              src="https://randomuser.me/api/portraits/med/men/11.jpg"
              rounded="circle"
              w="50px"
            />
          </Col>
          <Col>
            <Row>Daibin Raju</Row>
            <Row>Hello World</Row>
          </Col>
        </Row>
      </Div>
    );
  }
}
