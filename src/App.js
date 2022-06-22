import React, { useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import AddTask from "./components/Pages/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Login from "./components/Pages/Login";
import RequireAuth from "./components/RequireAuth";
import AuthContext from "./context/auth-context";

function App() {
  const authContext = useContext(AuthContext);

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
        <Header />
        <Routes>
          <Route
            exact
            path="/login"
            element={
              authContext.isLoggedIn ? (
                <Navigate to="/" replace />
              ) : (
                <Login onLogin={authContext.login} />
              )
            }
          />
          <Route
            exact
            path="/"
            element={
              tasks.length > 0 ? (
                <RequireAuth>
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onDoubleClick={toggleReminder}
                  />
                </RequireAuth>
              ) : (
                <RequireAuth>{<p>No tasks to show</p>}</RequireAuth>
              )
            }
          />
          <Route
            exact
            path="/add"
            element={
              <RequireAuth>
                <AddTask onSave={addTask} />
              </RequireAuth>
            }
          />
        </Routes>
        {authContext.isLoggedIn && (
          <button
            className="btn mt"
            style={{ backgroundColor: "red" }}
            onClick={authContext.logout}
          >
            Logout
          </button>
        )}
      </div>
    </Router>
  );
}

export default App;
