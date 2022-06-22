import { Navigate } from "react-router-dom"

const RequireAuth = (props) => {
  
    if (props.isLoggedIn === false) {
    return (<Navigate to="/login" replace />);
  }
  return props.children;
}

export default RequireAuth
