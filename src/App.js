import React, { useState } from "react";
import { CreaTareaButton } from "./button-tarea/CreaTareaButton";
import { TareaCounter } from "./tareaCounter/TareaCounter";
import { TareaItem } from "./tareaItem/TareaItem";
import { TareaList } from "./tareaList/TareaList";
import { TareaSearch } from "./tareaSearch/TareaSearch";

import "./App.css";
import { TaskCreator } from "./TaskCreator/TaskCreator";

const defaultTareas = [
  { text: "Cortar cebolla", completed: true },
  { text: "Terminar de estudiar", completed: false },
  { text: "Levantarse temprano", completed: false }
];

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [tareas, setTareas] = React.useState(defaultTareas);
  const completedTareas = tareas.filter(tarea => !!tarea.completed).length;
  const totalTareas = tareas.length;
  let searchedTareas = [];

  if (!searchValue.length >= 1) {
    searchedTareas = tareas;
  } else {
    searchedTareas = tareas.filter(tarea => {
      const tareaText = tarea.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return tareaText.includes(searchText);
    });
  }

  const completeTarea = (text) => {
    const tareaIndex = tareas.findIndex(tarea => tarea.text === text);
    const newTareas = [...tareas];
    newTareas[tareaIndex].completed = true;
    setTareas(newTareas);
  };
  const deleteTarea = (text) => {
    const tareaIndex = tareas.findIndex(tarea => tarea.text === text);
    const newTareas = [...tareas];
    newTareas.splice(tareaIndex, 1);
    setTareas(newTareas);
  };

  const createNewTask = (taskName) => {
    console.log(taskName)
    if (!tareas.find((t) => t.name === taskName))
      setTareas([...tareas, { text: taskName, completed: false }]);
  };
  return (
    <React.Fragment>
      <div className="container-app">
        <TareaCounter totalTareas={totalTareas} completed={completedTareas} />
        <TareaSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="ContainerInput"></div>
        <TareaList>
          {searchedTareas.map(tareas => (
            <TareaItem
              key={tareas.text}
              text={tareas.text}
              completed={tareas.completed}
              onComplete={() => completeTarea(tareas.text)}
              onDelete={() => deleteTarea(tareas.text)}
            />
          ))}
        </TareaList>

        {openModal && (
          <div className="box-task-creator">
            <TaskCreator createNewTask={createNewTask} />
          </div>
        )}

        <CreaTareaButton onClickButton={() => setOpenModal(true)} />

      </div>
    </React.Fragment>
  );
}

export default App;
