import React from "react";
import "./AddedUserItem.css";

function AddedUserItem(props) {
  function deleteHandler() {
    props.onDelete(props.id);
  }
  return (
    <li className="list-names" onClick={deleteHandler}>
      {props.children}
    </li>
  );
}

export default AddedUserItem;
