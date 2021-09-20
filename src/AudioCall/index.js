import React, { useState } from "react";
import { Div, Button, Modal, Icon, Text, Col, Row, Image } from "atomize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faPhoneSlash,
  faMicrophoneSlash,
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";
export default function AudioCall({ isOpen, onClose }) {
    const [isMute,setIsMute] = useState(false);
    const toggleMute=()=>{
        if (isMute){
            setIsMute(false)
        }
        else{
            setIsMute(true)
        }
    };
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      align="center"
      rounded="circle"
      p="0px"
    >
      <Div>
        <Row p="10px" bg="color2">
          <Col size={12}>
            <Text textWeight={900} textColor="black">
              Calling Daibin
              <Icon name="Loading2" size="20px" />
            </Text>
          </Col>
        </Row>
        <Row>
          <Image src="https://randomuser.me/api/portraits/med/men/11.jpg" />
        </Row>
        <Row p="10px" bg="color2">
          <Col size={4} d="flex" justify="center">
            <Button
              h="2.5rem"
              w="2.5rem"
              bg="color1"
              rounded="circle"
              shadow="2"
              hoverShadow="4"
            >
              <FontAwesomeIcon icon={faAngleDown} />
            </Button>
          </Col>
          <Col size={4} d="flex" justify="center">
            <Button
              h="2.5rem"
              w="2.5rem"
              bg="color1"
              rounded="circle"
              shadow="2"
              hoverShadow="4"
              onClick={toggleMute}
            >
              <FontAwesomeIcon icon={isMute?faMicrophoneSlash:faMicrophone} />
            </Button>
          </Col>
          <Col size={4} d="flex" justify="center">
            <Button
              h="2.5rem"
              w="2.5rem"
              bg="color5"
              rounded="circle"
              shadow="2"
              hoverShadow="4"
              onClick={onClose}
            >
              <FontAwesomeIcon icon={faPhoneSlash} />
            </Button>
          </Col>
        </Row>
      </Div>
    </Modal>
  );
}
