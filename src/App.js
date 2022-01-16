import "./App.css";
import FormInputs from "./Form/FormInputs";
import React, { useState } from "react";
import AddedUser from "./AddedUser/AddedUser";

function App() {
  const [addedList, addUser] = useState([
    { fname: "Filip", years: "23", id: Math.random().toString() },
    { fname: "Josip", years: "23", id: Math.random().toString() },
    { fname: "Ivan", years: "43", id: Math.random().toString() },
  ]);

  function addUserHandler(name, age) {
    addUser((prevUsers) => {
      const updatedUser = [...prevUsers];
      updatedUser.unshift({
        fname: name,
        years: age,
        id: Math.random().toString(),
      });

      return updatedUser;
    });
  }
  function deleteItem(itemId) {
    addUser((prevUsers) => {
      const updatedUser = prevUsers.filter((item) => item.id !== itemId);
      return updatedUser;
    });
  }
  let content = (
    <p style={{ textAlign: "center" }}>
      No added users. <br />
      Add some.
    </p>
  );
  let size = addedList.length;

  if (size > 0) {
    content = <AddedUser items={addedList} onDeleteItem={deleteItem} />;
  }
  return (
    <div className="App">
      <section className="first-section">
        <FormInputs onAddUser={addUserHandler} />
      </section>
      <section className="sec-section">{content}</section>
    </div>
  );
}

export default App;
