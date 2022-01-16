import React, { useState, useRef } from "react";
import ErrorModal from "../ErrorMsg/ErrorModal";
import Button from "./Button";
import "./FormInputs.css";

function FormInputs(props) {
  const [isValid, setValid] = useState(true);
  const [error, setError] = useState("");
  const nameInputRef = useRef(); //pomocu ref pristupamo DOM-u
  const ageInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredName = nameInputRef.current.value; //current.value from DOM
    const enteredAge = ageInputRef.current.value; //current.value from DOM
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setValid(false);
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please, enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
  }

  function errorHandler() {
    setError(null);
  }
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <div className="form">
        <form onSubmit={submitHandler}>
          <div className="username">
            <label>Username</label>
            <input
              className={!isValid ? "invalid" : ""}
              type="text"
              ref={nameInputRef}
            />
          </div>
          <div className="years">
            <label>Age</label>
            <input
              className={!isValid ? "invalid" : ""}
              type="number"
              ref={ageInputRef}
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </div>
    </div>
  );
}

export default FormInputs;
