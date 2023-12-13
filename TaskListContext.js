import React, { createContext, useState, useEffect } from 'react'
import { v4 as uuid} from 'uuid' 
// uuid basically generate a id corresponding to the data we give to it

export const TaskListContext = createContext() 
// taskprovider basically store the data as backup in our server to view

const TaskListContextProvider = (props)=> {  
  // json .parse and stringify convert strings into json objects for view the objects

  const initialState = JSON.parse(localStorage.getItem('tasks')) || []

  const [tasks, setTasks] = useState(initialState)  ;
  

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const [editItem, setEditItem] = useState(null)

  // Add tasks on our list
  const addTask = title => {
    setTasks([...tasks, { title, id: uuid() }])
  }

  // Remove tasks from our list
  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Clear tasks from our list
  const clearList = () => {
    setTasks([])
  }

  // Find task in exxisting list
  const findItem = id => {
    const item = tasks.find(task => task.id === id)

    setEditItem(item)
  }

  // Edit task
  const editTask = (title, id) => {
    const newTasks = tasks.map(task => (task.id === id ? { title, id } : task))

    console.log(newTasks)

    setTasks(newTasks)
    setEditItem(null)
  }

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearList,
        findItem,
        editTask,
        editItem
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  )
}

export default TaskListContextProvider