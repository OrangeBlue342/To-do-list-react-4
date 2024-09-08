import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";

const tasks = [
  {id: 1, content: "Prejść na Reacta,", done: false},
  {id: 2, content: "Zjeść obiad", done: true},
]

const hideDoneTasks = false;


function App() {
  return (
    <div>
      <main className="body">
    <h1 className="header">Lista zadań</h1>
    <h2 className="tasks_header">Dodaj nowe zadanie</h2>
<Form/>

<h2 className="list_header">Lista zadań 

<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks}/>
</h2>

<Tasks tasks={tasks} hideDoneTasks= {hideDoneTasks}/>
</main>
    </div>
  );
}

export default App;
