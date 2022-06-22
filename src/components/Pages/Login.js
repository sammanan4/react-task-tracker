import { Fragment, useState } from "react";
import ErrorModal from "../ErrorModal";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    message: "",
    isError: false,
  });

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (username.length === 0 || password.length === 0) {
      setError({
        message: "Username and password cannot be empty",
        isError: true,
      });
      return;
    }
    const success = onLogin(username, password);
    if(!success)
        setError({
            message: "Invalid username or password",
            isError: true,
        });

    setUsername("");
    setPassword("");
  };

  const onModalClose = () => {
    setError({ ...error, isError: false });
  };

  return (
    <Fragment>
      {error.isError && (
        <ErrorModal message={error.message} onClose={onModalClose} />
      )}
      <form onSubmit={onSubmit} className="px">
        <label htmlFor="username" value={username}>
          Username
        </label>
        <br />
        <input id="username" type="text" onChange={onUsernameChange} />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          id="password"
          type="password"
          value={password}
          onChange={onPasswordChange}
        />
        <br />
        <button className="btn w-100 mt">Login</button>
      </form>
    </Fragment>
  );
};

export default Login;
