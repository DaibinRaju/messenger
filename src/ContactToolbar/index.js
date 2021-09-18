import React from "react";
import { Div, Row, Col, Button, Icon, Text } from "atomize";

export default class ContactList extends React.Component {
  render() {
    return (
      <Div p="1rem">
        <Row>
          <Col size={2}>
            <Button
              h="2.5rem"
              w="2.5rem"
              bg="color1"
              rounded="circle"
              m={{ r: "1rem" }}
              shadow="2"
              hoverShadow="4"
            >
              <Icon name="Search" size="20px" color="white" />
            </Button>
          </Col>
          <Col size={8} textAlign="center" align="center">
            <Text textWeight={900} p={{ t: "auto", b: "auto" }}>
              Messenger
            </Text>
          </Col>
          <Col size={2}>
            <Button
              h="2.5rem"
              w="2.5rem"
              bg="color1"
              rounded="circle"
              m={{ r: "1rem" }}
              shadow="2"
              hoverShadow="4"
            >
              <Icon name="Plus" size="20px" color="white" />
            </Button>
          </Col>
        </Row>
      </Div>
    );
  }
}
