import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);

  return (
    <div>
      {tasks.length > 0 ? (
        <ul className="list">
          {tasks?.map(task => {
            return <Task task={task} key={task?.id} />;
          })}
        </ul>
      ) : (
        <div className="no-tasks">No Tasks</div>
      )}
    </div>
  );
};

export default TaskList; 
// above no task option we call for task function to add , edit and delete 
// bwlow task option  we return empty array (because we are not putting tite value)