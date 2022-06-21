import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddTask from "./components/AddTask";
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

  const addTask = (task) => {
    const randId = Math.floor(Math.random() * 10000) + 1;
    setTasks([...tasks, { ...task, id: randId }]);
  };

  return (
    <Router>
      <div className="container">
        <Header onSaveTask={addTask} />
        <Routes>
        <Route
          path="/"
          element={
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
        />
        <Route
          exact
          path="/add"
          element={<AddTask onSave={addTask} />}
        />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
