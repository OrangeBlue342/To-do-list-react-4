import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";



function App() {
  const [hideDoneTasks, sethideDoneTasks] = useState(false);
  const [tasks, setTasks] = useState(
    [
      {id: 1, content: "Prejść na Reacta,", done: false},
      {id: 2, content: "Zjeść obiad", done: true},
    ]);

const togglehideDoneTasks = () => {
  sethideDoneTasks(hideDoneTasks => !hideDoneTasks);
};

const removeTask = (id) => {
  setTasks(tasks => tasks.filter(task => task.id !== id));
};

  return (
    <div>
      <main className="body">
    <h1 className="header">Lista zadań</h1>
    <h2 className="tasks_header">Dodaj nowe zadanie</h2>
<Form/>

<h2 className="list_header">Lista zadań 

<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} togglehideDoneTasks={togglehideDoneTasks} />
</h2>

<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} removeTask={removeTask} />
</main>
    </div>
  );
}

export default App;
