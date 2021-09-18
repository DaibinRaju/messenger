import React from "react";
import ContactToolbar from "../ContactToolbar";
import ContactSearch from "../ContactSearch";
import ContactItem from "../ContactItem";
import { Div } from "atomize";
export default class ContactList extends React.Component {
  contact = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2,
  ];
  render() {
    return (
      <Div>
        <Div h="20vh">
          <ContactToolbar />
          <ContactSearch />
        </Div>

        <Div overflow="visible scroll" h="75vh">
          {this.contact.map((c) => (
            <ContactItem />
          ))}
        </Div>
      </Div>
    );
  }
}
