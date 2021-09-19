import React from "react";
import ContactToolbar from "../ContactToolbar";
import ContactSearch from "../ContactSearch";
import ContactItem from "../ContactItem";
import { Div } from "atomize";
export default function ContactList(){
  const contact = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2,
  ];

    return (
      <Div p="1rem">
        <Div h="20vh">
          <ContactToolbar />
          <ContactSearch />
        </Div>

        <Div overflow="visible scroll" h="calc( 80vh - 1rem )">
          {contact.map((c) => (
            <ContactItem />
          ))}
        </Div>
      </Div>
    );
  
}
