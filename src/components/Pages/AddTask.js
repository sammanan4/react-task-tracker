import React, { useState, Fragment, useEffect } from "react";
import ErrorModal from "../ErrorModal";
import Button from "../UI/Button";

const AddTask = ({ onSave }) => {
  const [title, setTitle] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  const [canSave, setCanSave] = useState();

  const [error, setError] = useState({
    message: "",
    isError: false,
  });

  useEffect(() => {
    const timerIdentifier = setTimeout(() => {
      if (title.length > 0 && day.length > 0) {
        setCanSave(true);
      } else {
        setCanSave(false);
      }
    }, 500);

    return () => {
      clearTimeout(timerIdentifier);
    }
  }, [title, day]);

  const onModalClose = () => {
    setError({ ...error, isError: false });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (title.length === 0 || day.length === 0) {
      setError({
        message: "Title and Day are required",
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

        <Button title="Save" isDisabled={!canSave} />
      </form>
    </Fragment>
  );
};

export default AddTask;
