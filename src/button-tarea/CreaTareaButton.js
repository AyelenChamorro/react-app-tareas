import React from 'react'
import "./CreaTareaButton.css";

function CreaTareaButton({ onClickButton }) {


  return (
    <button onClick={onClickButton} className="button-agregar" type=""><i className="fa-solid   fa-circle-plus"></i></button>

  )
}

export { CreaTareaButton };