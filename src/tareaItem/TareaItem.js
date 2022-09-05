import React from "react";
import "./TareaItem.css";

function TareaItem(props ) {
  return (
    <li className="items">
      <span onClick={props.onComplete} className={`Icon Icon-Check ${props.completed && 'icon-check--active'}`}><i className="fa-solid fa-check"></i></span>
      <p className={`TareaItem-P ${props.completed && 'TareaItem-p--completed'}`}>{props.text}</p>
      <span onClick={props.onDelete} className={"disapproved-item"}><i className="fa-solid fa-xmark"></i></span>
    </li>
  );
}

export { TareaItem };
