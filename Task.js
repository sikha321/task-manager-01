import React, { useContext } from 'react'
import { TaskListContext } from '../context/TaskListContext'
import '../index.css';

const Task = ( task ) => {
  const { removeTask, findItem } = useContext(TaskListContext);

  return (
    <li className="list-item">
      <span>{task?.task?.title}</span>
      <div>
        <button
          className="btn-delete task-btn"
          onClick={() => removeTask(task?.task?.id)}
        >
          Delete Task
        </button>{' '}
        <button className="btn-edit task-btn" onClick={() => findItem(task?.task?.id)}> {  
        
        }
        
        
  edit task
        </button>
      </div>
    </li>
  )
}

export default Task; 
