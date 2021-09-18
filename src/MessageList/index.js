import { Component, React } from "react";
import MessageToolbar from "../MessageToolbar";
import MessageCompose from "../MessageCompose";
import { Div, Text, Row, Col } from "atomize";
export default class MessageList extends Component {
  constructor(props) {
    super(props);
  }
  tempMessages = [
    {
      id: 1,
      author: "apple",
      message:
        "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
      timestamp: new Date().getTime(),
    },
    {
      id: 2,
      author: "orange",
      message:
        "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
      timestamp: new Date().getTime(),
    },
    {
      id: 3,
      author: "orange",
      message:
        "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
      timestamp: new Date().getTime(),
    },
    {
      id: 4,
      author: "apple",
      message:
        "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
      timestamp: new Date().getTime(),
    },
    {
      id: 5,
      author: "apple",
      message:
        "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
      timestamp: new Date().getTime(),
    },
    {
      id: 6,
      author: "apple",
      message:
        "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
      timestamp: new Date().getTime(),
    },
    {
      id: 7,
      author: "orange",
      message:
        "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
      timestamp: new Date().getTime(),
    },
    {
      id: 8,
      author: "orange",
      message:
        "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
      timestamp: new Date().getTime(),
    },
    {
      id: 9,
      author: "apple",
      message:
        "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
      timestamp: new Date().getTime(),
    },
    {
      id: 10,
      author: "orange",
      message:
        "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
      timestamp: new Date().getTime(),
    },
  ];

  render() {
    return (
      <Div m="1rem">
        <Div h="10vh">
          <MessageToolbar />
        </Div>
        <Div h="75vh" overflow="scroll" d="flex" justify="flex-end" flexDir="column">
          <Div d="flex" justify="flex-end">
            <Text
			  m="2px"
              p="1rem"
              rounded={{ l: "circle", tr: "circle" }}
              bg="color2"
            >
              Hello World. This is someones message1.
            </Text>
          </Div>
		  <Div d="flex" justify="flex-end">
            <Text
			m="2px"
              p="1rem"
              rounded={{ l: "circle"}}
              bg="color2"
            >
              Hello World. This is someones message2.
            </Text>
          </Div>
		  <Div d="flex" justify="flex-end">
            <Text
			m="2px"
              p="1rem"
              rounded={{ l: "circle", br: "circle" }}
              bg="color2"
            >
              Hello World. This is someones message3.
            </Text>
          </Div>
		  <Div d="flex" justify="flex-start">
            <Text
              m="2px"
              p="1rem"
              rounded={{ r: "circle", tl: "circle" }}
              bg="color3"
            >
              Hello World. This is someones message2.
            </Text>
          </Div>
        </Div>
        <Div h="10vh">
          <MessageCompose />
        </Div>
      </Div>
    );
  }
}
