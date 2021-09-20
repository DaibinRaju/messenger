import React,{useState, useRef, useEffect} from "react";
import { Div, Button, Modal, Row, Col } from "atomize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faPhoneSlash,
  faMicrophoneSlash,
  faVideo,
  faVideoSlash
} from "@fortawesome/free-solid-svg-icons";

export default function VideoCall({ isOpen, onClose }) {
    const [isMute,setIsMute] = useState(false);
    const [isVideo,setIsVideo] = useState(true);

    const toggleMute=()=>{
        if (isMute){
            setIsMute(false)
        }
        else{
            setIsMute(true)
        }
    };
    const toggleVideo=()=>{
        if (isVideo){
            setIsVideo(false)
        }
        else{
            setIsVideo(true)
        }
    };

    


//     const videoRef = useRef(null);
//     useEffect(() => {
//         getVideo();
//       }, [videoRef]);

//   const getVideo = () => {
//     navigator.mediaDevices
//       .getUserMedia({ video: { width: 300 } })
//       .then(stream => {
//         let video = videoRef.current;
//         video.srcObject = stream;
//         video.play();
//       })
//       .catch(err => {
//         console.error("error:", err);
//       });
//   };
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      rounded="0"
      maxW="100vw"
      m="0"
      h="100vh"
      p="0px"
    >
      <Div>
        <Row h="90vh">
          <video height="100%" ></video>
        </Row>
        <Row h="10vh" bg="color2" d="flex" align="center">
          <Col size={4}></Col>
          <Col size={4}>
            <Row>
              {" "}
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
                  bg="color1"
                  rounded="circle"
                  shadow="2"
                  hoverShadow="4"
                  onClick={toggleVideo}
                >
                  <FontAwesomeIcon icon={isVideo?faVideo:faVideoSlash} />
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
          </Col>
          <Col size={4}></Col>
        </Row>
      </Div>
    </Modal>
  );
}
