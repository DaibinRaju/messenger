import React from "react";
import { Div, Input } from "atomize";
export default function ContactSearch(){

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
