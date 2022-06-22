import { useContext } from "react";
import { Navigate } from "react-router-dom"
import AuthContext from "../context/auth-context";

const RequireAuth = (props) => {

  const ctx = useContext(AuthContext);

    if (ctx.isLoggedIn === false) {
    return (<Navigate to="/login" replace />);
  }
  return props.children;
}

export default RequireAuth
