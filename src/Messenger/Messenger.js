import { Div, Row, Col, Container } from "atomize";
import React from "react";
import ContactList from "../ContactList/index"
import MessageList from "../MessageList"

export default class Messenger extends React.Component {
  render() {
    return (
      <Div m="1rem">
        <Row>
          <Col size={4}>
              <ContactList/>
          </Col>
          <Col size={8}>
              <MessageList/>
          </Col>
        </Row>
      </Div>
    );
  }
}
