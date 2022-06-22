import React, { useState, Fragment } from "react";
import ErrorModal from "./ErrorModal";

const AddTask = ({ onSave }) => {
  const [title, setTitle] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const [error, setError] = useState({
    message: "",
    isError: false,
  });

  const onModalClose = () => {
    setError({ ...error, isError: false });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (title.length === 0) {
      setError({
        message: "Title is required",
        isError: true,
      });
      return;
    }
    onSave({ title, day, reminder });
    setTitle("");
    setDay("");
    setReminder(false);
  };

  return (
    <Fragment>
      {error.isError && (
        <ErrorModal message={error.message} onClose={onModalClose} />
      )}
      <form onSubmit={onSubmit} className="px">
        <label htmlFor="task-title">Title</label>
        <br />
        <input
          id="task-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />

        <label htmlFor="task-day">Day</label>
        <br />
        <input
          id="task-day"
          type="text"
          value={day}
          onChange={(e) => {
            setDay(e.target.value);
          }}
        />

        <br />

        <label htmlFor="task-reminder">Set Reminder</label>
        <input
          id="task-reminder"
          type="checkbox"
          checked={reminder}
          onChange={(e) => setReminder(e.target.checked)}
        />
        <br />

        <button className="btn w-100 mt">Save</button>
      </form>
    </Fragment>
  );
};

export default AddTask;
