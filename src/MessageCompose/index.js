import React from "react";
import { Row, Col, Input,Icon,Button } from "atomize";

export default class MessageCompose extends React.Component {
  render() {
    return (
      <Row>
        <Col size={8}>
          <Input placeholder="Say Hi" rounded="circle" />
        </Col>
        <Col size={1}>
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
              <Col size={1}>
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
              <Col size={1}>
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
              <Col size={1}>
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
    );
  }
}
