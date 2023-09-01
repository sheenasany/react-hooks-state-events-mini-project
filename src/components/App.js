import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });
function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")
  
// console.log(tasks)
  //this will also need to be in TaskList instead of task since we're creating changes with every user click
  let taskFilter = tasks.filter(task => {
    return category === "All" || category === task.category
  })

// console.log(taskFilter)

// this function is for the delete button on Tasks
  function deletedTasks(text) {
    const filteredTasks = tasks.filter(task => task.text !== text)
    setTasks(filteredTasks)
    
    // setTasks(tasks.filter(task => task.text !== deletedTask))
  }

  // function addTasks(newTasks) {
  //   setTasks([...])
  // }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setCategory={setCategory} selectedCategory={category} />
      <NewTaskForm categories={CATEGORIES} tasks={tasks} setTasks={setTasks} /> 
      <TaskList  tasks={taskFilter} deletedTasks={deletedTasks} />
    </div>
  );
}

export default App;


