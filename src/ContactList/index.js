import React, { useEffect, useState } from "react";
import ContactToolbar from "../ContactToolbar";
import ContactSearch from "../ContactSearch";
import ContactItem from "../ContactItem";
import { Div } from "atomize";
import axios from "axios";

export default function ContactList() {
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    axios.get('https://randomuser.me/api/?results=20').then((res) => {
        setUsers(res.data.results);
    });
  };
  useEffect(() => {getUsers();}, []);

  return (
    <Div>
      <Div h="20vh">
        <ContactToolbar />
        <ContactSearch />
      </Div>

      <Div overflow="visible scroll" h="80vh">
        {users.map((user) => {
            const key = user.login.uuid;
            const name = user.name.first+ " " + user.name.last;
            const picture = user.picture.medium;
            return(
                <ContactItem key={key} name={name} picture={picture}/>
            )
        })}
    
      </Div>
    </Div>
  );
}
