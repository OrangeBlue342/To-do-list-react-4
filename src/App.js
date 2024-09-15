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

const toggleTaskDone = (id) => {
setTasks(tasks => tasks.map(task =>{
if(task.id === id) {
  return {...task, done: !task.done };
}

return task;
}));
};

const setAllDone = () => {
  setTasks(tasks => tasks.map(task => ({...task, done: true
  })));
};

  return (
    <div>
      <main className="body">
    <h1 className="header">Lista zadań</h1>
    <h2 className="tasks_header">Dodaj nowe zadanie</h2>
<Form/>

<h2 className="list_header">Lista zadań 

<Buttons 
tasks={tasks} 
hideDoneTasks={hideDoneTasks} 
togglehideDoneTasks={togglehideDoneTasks}
setAllDone={setAllDone}
/>
</h2>

<Tasks 
tasks={tasks} 
hideDoneTasks={hideDoneTasks} 
removeTask={removeTask} 
toggleTaskDone={toggleTaskDone}
/>
</main>
    </div>
  );
}

export default App;
