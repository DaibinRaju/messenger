import { Div, Row, Col, ThemeProvider } from "atomize";
import React from "react";
import ContactList from "../ContactList/index";
import MessageList from "../MessageList";

const theme = {
  colors: {
    color1: "#006d77",
    color2:"#83c5be",
    color3:"#edf6f9",
    color4:"#FFFFFF",
    color5:"#d62828"
  },
  grid: {
    gutterWidth: "0px",
  }
};

export default function Messenger(){

    return (
      <ThemeProvider theme={theme}>
        <Div>
          <Row>
            <Col size={3}>
              <ContactList />
            </Col>
            <Col size={9} border={{l:'1px solid'}} borderColor='color2'>
              <MessageList />
            </Col>
          </Row>
        </Div>
      </ThemeProvider>
    );
  }

