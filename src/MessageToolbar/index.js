import React from 'react';
import { Div,Col, Row,Text,Button,Icon } from 'atomize';
export default class MessageToolbar extends React.Component{
    render(){
        return(
            <Div p="1rem">
            <Row>
              <Col size={10} textAlign="center" align="center">
                <Text textWeight={900} p={{ t: "auto", b: "auto" }}>
                  Messenger
                </Text>
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
          </Div>
        );
    }
}