import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import AddTask from "./AddTask";

const Header = ({ title, onSaveTask }) => {
  // get current route
  const route = useLocation();

  return (
    <div>
      <header>
        <h2>{title}</h2>
        <Link
          className="btn"
          style={{ backgroundColor: route.pathname === "/" ? "green" : "red", textDecoration: "none" }}
          to={route.pathname === "/" ? "/add" : "/"}
        >
          {route.pathname === "/" ? "Add New Task" : "Close"}
        </Link>
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
