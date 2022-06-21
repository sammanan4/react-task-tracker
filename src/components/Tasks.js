import Task from "./Task";
import PropTypes from 'prop-types'

const Tasks = ({ tasks, onDelete, onDoubleClick }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onDoubleClick={onDoubleClick}
        />
      ))}
    </div>
  );
};

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
}

export default Tasks;
