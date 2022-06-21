import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Buy Groceries",
      day: "5th January",
      reminder: false,
    },
    {
      id: 2,
      title: "Doctor's Appointment",
      day: "12th January",
      reminder: false,
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const addTask = (task) => {
    const randId = Math.floor(Math.random() * 10000) + 1;
    setTasks([...tasks, { ...task, id: randId }]);
  }

  return (
    <div className="container">
      <Header showForm={showForm} onAdd={toggleForm} onSaveTask={addTask} />
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onDoubleClick={toggleReminder}
        />
      ) : (
        <p>No tasks to show</p>
      )}
    </div>
  );
}

export default App;
