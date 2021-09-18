import React from "react";
import { Div, Input } from "atomize";
export default class ContactSearch extends React.Component {
  render() {
    return (
      <Div p="1rem">
        <Input
          placeholder="Search messages"
          rounded="circle"
          textAlign="center"
        />
      </Div>
    );
  }
}
