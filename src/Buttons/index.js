import React from "react";
import "./style.css";

const Buttons = ({tasks, hideDoneTasks, togglehideDoneTasks, setAllDone}) => {
if (tasks.lenght === 0) {
    return null
}

    return (
        <div className="buttons">
             <button onClick={togglehideDoneTasks} className="buttons_button1">
        {hideDoneTasks ? "Pokaż" : "Ukryj"} skończone zadania</button>
        <button 
        onClick={() => setAllDone()}
        className="buttons_button2"
        disabled={tasks.every (({ done }) => done)}
        >
        Oznacz wszystkie jako ukończone
        </button>
        </div>
    )
};

export default Buttons