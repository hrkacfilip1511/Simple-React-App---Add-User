import React from "react";
import "./ErrorModal.css";
import ReactDOM from "react-dom";

function Backdrop(props) {
  return <div className="whole-bg" onClick={props.onConfirm} />;
}

function ModalOverlay(props) {
  return (
    <div className="error-container">
      <header>
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <button onClick={props.onConfirm} className="close-btn">
        Okay
      </button>
    </div>
  );
}

function ErrorModal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("backdrop-root")
      )}
    </React.Fragment>
  );
}

export default ErrorModal;
