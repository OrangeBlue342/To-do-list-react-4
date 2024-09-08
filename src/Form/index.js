import React from "react";
import "./style.css"

const Form = (props) => (
    <form className="form">
    <input className="form_input" placeholder="Co jest do zrobienia?"/>
    <button className="task_add">Dodaj zadanie</button>
</form> 
)

export default Form;