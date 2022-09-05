import React from "react";
import "./TareaCounter.css";

function TareaCounter ({totalTareas, completed}) {
    
    return(
        <h2 className="TareaCounter">
            Has completado {completed} de {totalTareas} tareas
        </h2>
    );
}

export {TareaCounter};

