import { Col, Image, Row, Div, Text } from "atomize";
import React from "react";

export default function ContactItem(){

    return (
      <Div m="15px">
        <Row border={{b:"1px solid"}} borderColor="color2">
          <Col size={3}>
            <Image
              src="https://randomuser.me/api/portraits/med/men/11.jpg"
              rounded="circle"
              w="50px"
            />
          </Col>
          <Col>
            <Row>
              <Text textWeight={900}>Daibin Raju</Text>
            </Row>
            <Row>Hello World. This is a message</Row>
          </Col>
        </Row>
      </Div>
    );
  
}
