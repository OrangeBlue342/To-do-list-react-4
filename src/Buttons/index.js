import React from "react";
import "./style.css";

const Buttons = (props) => {
if (props.tasks.lenght === 0) {
    return null
}

    return (
        <div className="buttons">
             <button className="buttons_button">
        {props.hideDoneTasks ? "Pokaż" : "Ukryj"} skończone zadania</button>
        <button className="buttons_button"
        disabled={props.tasks.every (({ done }) => done)}
        >
        Oznacz wszystkie jako ukończone
        </button>
        </div>
    )
};

export default Buttons