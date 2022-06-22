import { useEffect, useState } from "react";
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLogin = (username, password) => {
    if (username === "admin" && password === "admin") {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
  }
  
  
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



  useEffect(() => {
    localStorage.getItem("isLoggedIn") === "true"
      ? setIsLoggedIn(true)
      : setIsLoggedIn(false);
  }, [isLoggedIn]);





  return (
    <Router>
      <div className="container">
        <Header onSaveTask={addTask} isLoggedIn={isLoggedIn} />
        <Routes>
          <Route
            exact
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate to="/" replace />
              ) : (
                <Login onLogin={onLogin} />
              )
            }
          />
          <Route
            exact
            path="/"
            element={
              tasks.length > 0 ? (
                <RequireAuth isLoggedIn={isLoggedIn}>
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onDoubleClick={toggleReminder}
                  />
                </RequireAuth>
              ) : (
                <RequireAuth isLoggedIn={isLoggedIn}>
                  {" "}
                  <p>No tasks to show</p>{" "}
                </RequireAuth>
              )
            }
          />
          <Route
            exact
            path="/add"
            element={
              <RequireAuth isLoggedIn={isLoggedIn}>
                <AddTask onSave={addTask} />
              </RequireAuth>
            }
          />
        </Routes>
        {isLoggedIn && (
          <button className="btn mt" style={{ backgroundColor: "red" }} onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </Router>
  );
}

export default App;
