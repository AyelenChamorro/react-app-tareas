import React from "react";
import "./TareaSearch.css";

function TareaSearch({ searchValue, setSearchValue }) {
  const onSearchValueChanged = (event) => {
    setSearchValue(event.target.value);
  };

  return [
    <input
      value={searchValue}
      onChange={onSearchValueChanged}
      className="input"
      placeholder="Tarea Nueva:"
    />
  ];
};

export { TareaSearch };
