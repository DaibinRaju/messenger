import React from "react";
import { Row, Col, Input, Icon, Button, Div } from "atomize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faPhotoVideo,
  faCamera,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";

export default class MessageCompose extends React.Component {
  render() {
    return (
      <Row>
        <Col size={8}>
          <Div p={{ l: '10px', r: '10px' }}>
            <Input
              placeholder="Say Hi"
              rounded="circle"
              suffix={
                <Icon
                  name="RightArrow"
                  size="20px"
                  cursor="pointer"
                  onClick={() => console.log("clicked")}
                  pos="absolute"
                  top="50%"
                  right="1rem"
                  transform="translateY(-50%)"
                />
              }
            />
          </Div>
        </Col>
        <Col size={1}>
          <Button
            h="2.5rem"
            w="2.5rem"
            bg="color1"
            rounded="circle"
            shadow="2"
            hoverShadow="4"
          >
            <FontAwesomeIcon icon={faMicrophone} />
          </Button>
        </Col>
        <Col size={1}>
          <Button
            h="2.5rem"
            w="2.5rem"
            bg="color1"
            rounded="circle"
            shadow="2"
            hoverShadow="4"
          >
            <FontAwesomeIcon icon={faPhotoVideo} />
          </Button>
        </Col>
        <Col size={1}>
          <Button
            h="2.5rem"
            w="2.5rem"
            bg="color1"
            rounded="circle"
            shadow="2"
            hoverShadow="4"
          >
            <FontAwesomeIcon icon={faCamera} />
          </Button>
        </Col>
        <Col size={1}>
          <Button
            h="2.5rem"
            w="2.5rem"
            bg="color1"
            rounded="circle"
            shadow="2"
            hoverShadow="4"
          >
            <FontAwesomeIcon icon={faSmile} />
          </Button>
        </Col>
      </Row>
    );
  }
}
