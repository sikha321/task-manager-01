import React, { useState, useContext, useEffect } from 'react'
import { TaskListContext } from '../context/TaskListContext' 
// title is basically the data we provide in the box

const TaskForm = () => {
  const { addTask, clearList, editTask, editItem } = useContext(TaskListContext)
  const [title, setTitle] = useState('') 
  // e prevent default ( browser reload stop) basically browser has feature of reloading multiple times

  const handleSubmit = e => {
    e.preventDefault()
    if (!editItem) {
      addTask(title)
      setTitle('')
    } else {
      editTask(title, editItem.id)
    }
  }

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title)
      console.log(editItem)
    } else {
      setTitle('')
    }
  }, [editItem])

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Add Task..."
        value={title}
        onChange={handleChange}
        required
        className="task-input"
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editItem ? 'update Task' : 'Add Task'} 
      
        </button>
        <button className="btn clear-btn" onClick={clearList}> 
      
          Clear
        </button>
      </div>
    </form>
  )
}

export default TaskForm