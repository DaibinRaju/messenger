import { Div, Row, Col, ThemeProvider } from "atomize";
import React from "react";
import ContactList from "../ContactList/index";
import MessageList from "../MessageList";

const theme = {
  colors: {
    color1: "#1B4A43",
    color2:"#C6E4D9",
    color3:"#F2F4F7",
    color4:"#FFFFFF",
  },
};

export default class Messenger extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Div>
          <Row>
            <Col size={3} border={{r:'solid'}} borderColor='color2'>
              <ContactList />
            </Col>
            <Col size={9}>
              <MessageList />
            </Col>
          </Row>
        </Div>
      </ThemeProvider>
    );
  }
}
