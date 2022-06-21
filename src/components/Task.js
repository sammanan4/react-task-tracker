import PropTypes from 'prop-types'
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onDoubleClick }) => {
  const className = task.reminder ? "task reminderTask" : "task";
  
    return (
    <div className={className} onDoubleClick={() => onDoubleClick(task.id)}>
      <span style={{ minWidth: "200px" }}>{task.title}</span>
      <span>{task.day}</span>
      <FaTimes
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => onDelete(task.id)}
      />
    </div>
  );
};

Task.propTypes = {
    task: PropTypes.object.isRequired
}

export default Task;
