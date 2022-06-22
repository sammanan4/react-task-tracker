import PropTypes from "prop-types";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../context/auth-context";

const Header = ({ title }) => {
  // get current route
  const route = useLocation();

  const ctx = useContext(AuthContext);

  return (
    <div>
      <header>
        <h2>{title}</h2>
        {ctx.isLoggedIn && (
          <Link
            className="btn"
            style={{
              backgroundColor: route.pathname === "/" ? "green" : "red",
              textDecoration: "none",
            }}
            to={route.pathname === "/" ? "/add" : "/"}
          >
            {route.pathname === "/" ? "Add New Task" : "Close"}
          </Link>
        )}
      </header>
    </div>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
