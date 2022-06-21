import PropTypes from "prop-types";
import AddTask from "./AddTask";

const Header = ({ title, showForm, onAdd, onSaveTask }) => {
  return (
    <div>
      <header>
        <h2>{title}</h2>
        <button
          className="btn"
          style={{ backgroundColor: showForm ? "red" : "green"}}
          onClick={onAdd}
        >
          {showForm ? 'Close':'Add New Task'}
        </button>
      </header>
      {showForm && <AddTask onSave={onSaveTask} />}
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
