import React, {useState} from "react";
import "./style.css"

const Form = ({addNewTask}) => {

    const [NewTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
     event.preventDefault();
     if (NewTaskContent.trim() === "") {
        return
     };
     addNewTask(NewTaskContent.trim());
     setNewTaskContent("");
    };

    return (
    <form className="form" onSubmit={onFormSubmit}>
    <input 
    value={NewTaskContent}
    className="form_input" 
    placeholder="Co jest do zrobienia?"
    onChange={(event) => setNewTaskContent(event.target.value)}
    />
    <button className="task_add">Dodaj zadanie</button>
</form>
)
};

export default Form;