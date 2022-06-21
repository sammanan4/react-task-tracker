import React from 'react';
import Tasks from './Tasks';


function TaskRender({tasks, deleteTask, toggleReminder}) {
  return (
    <div>
    {
      tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onDoubleClick={toggleReminder}
        />
      ) : (
        <p>No tasks to show</p>
      )
    }
    </div>
  )
}

export default TaskRender
