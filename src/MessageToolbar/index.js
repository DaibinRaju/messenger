import React, { useState } from "react";
import { Div, Col, Row, Text, Button } from "atomize";
import AudioCall from "../AudioCall";
import VideoCall from "../VideoCall";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faPhone, faInfo } from "@fortawesome/free-solid-svg-icons";

export default function MessageToolbar() {
  const [showAudioCall, setShowAudioCall] = useState(false);
  const [showVideoCall, setShowVideoCall] = useState(false);

  const audioCall = () => {setShowAudioCall(true)};
  const videoCall=()=>{setShowVideoCall(true)};
  return (
    <Div p="1rem">
      <Row>
        <Col size={9}>
          <Div d="flex" align="center" h="100%" justify="center">
            <Text textWeight={900}>Messenger</Text>
          </Div>
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
            onClick={audioCall}
          >
            <FontAwesomeIcon icon={faPhone} />
            <AudioCall
              isOpen={showAudioCall}
              onClose={() => setShowAudioCall(false)}
            />
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
            onClick={videoCall}
          >
            <FontAwesomeIcon icon={faVideo} />
            <VideoCall
              isOpen={showVideoCall}
              onClose={() => setShowVideoCall(false)}
            />
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
            <FontAwesomeIcon icon={faInfo} />
          </Button>
        </Col>
      </Row>
    </Div>
  );
}
