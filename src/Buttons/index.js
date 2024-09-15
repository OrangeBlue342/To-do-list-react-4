import React from "react";
import "./style.css";

const Buttons = ({tasks, hideDoneTasks, togglehideDoneTasks, setAllDone}) => {
if (tasks.lenght === 0) {
    return null
}

    return (
        <div className="buttons">
             <button onClick={togglehideDoneTasks} className="buttons_button">
        {hideDoneTasks ? "Pokaż" : "Ukryj"} skończone zadania</button>
        <button 
        onClick={() => setAllDone()}
        className="buttons_button"
        disabled={tasks.every (({ done }) => done)}
        >
        Oznacz wszystkie jako ukończone
        </button>
        </div>
    )
};

export default Buttons