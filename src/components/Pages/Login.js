import { Fragment, useReducer, useState } from "react";
import ErrorModal from "../ErrorModal";



const usernameReducer = (state, action) => {
    if(action.type === "USER_INPUT"){
        return {
            value: action.value,
            isValid: action.value.length >= 5
        }
    }
    return {
        value: state.value,
        isValid: state.isValid
    }
}


const Login = ({ onLogin }) => {
    
    const [usernameState, dispatchUsername] = useReducer(usernameReducer, {
        value: "",
        isValid: false
    });

//   const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    message: "",
    isError: false,
  });

  const onUsernameChange = (e) => {
    dispatchUsername({
        type: "USER_INPUT",
        value: e.target.value
    })
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(!usernameState.isValid){
        setError({
            message: "Username must be atleast 5 characters",
            isError: true,
            });
            return;  
    }
    if (password.length === 0) {
      setError({
        message: "password cannot be empty",
        isError: true,
      });
      return;
    }
    const success = onLogin(usernameState.value, password);
    if(!success)
        setError({
            message: "Invalid username or password",
            isError: true,
        });
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
        <label htmlFor="username" value={usernameState.value}>
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
