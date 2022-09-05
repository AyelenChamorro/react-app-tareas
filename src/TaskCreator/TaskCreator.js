import { useState } from "react";

import './styles.css'

export const TaskCreator = ({ createNewTask }) => {

    const [newTaskName, setNewTaskName] = useState("");
    const [error, setError] = useState(false);
    const handleSubmit = (e) => {
        if (newTaskName.trim() === "") {
            e.preventDefault();
            setError(true);
            return;
        }
        e.preventDefault();
        createNewTask(newTaskName);
        setNewTaskName("");
    };

    return (
        <form className="my-2 row task-creator" onSubmit={handleSubmit}>
            <div className="col-9 box-input">
                <input
                    type="text"
                    className="form-control"
                    value={newTaskName}
                    onChange={(e) => setNewTaskName(e.target.value)}
                    placeholder="Escriba una nueva tarea"
                    autoFocus
                />
                {error && <div className="">Por favor escriba una tarea</div>}

            </div>
            <div className="col-3 p-0 d-flex align-items-center box-button">
                <button className="btn btn-primary btn-sm" type="submit">
                    Guardar Tarea
                </button>
            </div>
        </form>
    );
};
