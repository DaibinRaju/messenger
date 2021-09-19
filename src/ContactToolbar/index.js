import React from "react";
import { Div, Row, Col, Button, Text } from "atomize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function ContactList() {
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
              <FontAwesomeIcon icon={faBars} />
            </Button>
          </Col>
          <Col size={8} textAlign="center" align="center">
            <Div d="flex" align="center" h="100%" justify="center">
              <Text textWeight={900}>Messenger</Text>
            </Div>
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
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </Col>
        </Row>
      </Div>
    );
}
