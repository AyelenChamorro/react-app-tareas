import React from "react";
import "./TareaList.css";

function TareaList(props) {
  return (
    <section className="tareas">
      <ul className="container-items">{props.children}</ul>
    </section> 
  );
}

export { TareaList };
