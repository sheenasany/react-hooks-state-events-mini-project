import React, { useState } from "react";

function NewTaskForm({categories, tasks, setTasks }) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("")

const renderDropdown = categories.map(category => {
  return <option key={category}>{category === "All" ? null : category}</option>
})

// another way to create the drop down without the blank space for All
// const renderDropdown = categories.map(categories => {
  //   return category === "All" ? null : <option key={category}>{category}</option>
  // })

  function onTaskFormSubmit(e) {
    e.preventDefault()
    console.log(text, category)
    let newTasks = {
      text:text,
      category:category
    }

    setTasks([...tasks, newTasks])
    // reset the values
    setText("")
    setCategory("")

  }


  return (
    <form onSubmit={onTaskFormSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={e => setText(e.target.value)} value={text} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={e => setCategory(e.target.value)} value={category} name="category">
          {renderDropdown}
        </select>
      </label>
      <input  type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
