import "./Button.css";

function Button(props) {
  return (
    <div>
      <button type={props.type} onClick={props.onClick} className="btn">
        {props.children}
      </button>
    </div>
  );
}
export default Button;
