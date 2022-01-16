import React from "react";
import AddedUserItem from "./AddedUserItem";
import "./AddedUser.css";
function AddedUser(props) {
  return (
    <ul className="list">
      {props.items.map((item) => (
        <AddedUserItem key={item.id} id={item.id} onDelete={props.onDeleteItem}>
          {item.fname} <br />({item.years} years old)
        </AddedUserItem>
      ))}
    </ul>
  );
}

export default AddedUser;
