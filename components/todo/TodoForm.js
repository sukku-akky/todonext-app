import styles from "./TodoForm.module.css";
import { useState } from "react";

const TodoForm = (props) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [showForm, setShowForm] = useState(false);

  const onAddTask = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setTaskName("");
    setDescription("");
    setShowForm(false);
  };
  const handleSubmit =  (e) => {
    e.preventDefault();
    if (!taskName || !description) {
      alert("Both fields are required");
      return;
    }

    const enteredDetails={
      task:taskName,
      description:description,
      status:false,
    };
    console.log(enteredDetails);
    props.onAddTaskDetails(enteredDetails);
    setTaskName('');
    setDescription('');

   
  };

  return (
    <>
      <div className={styles.addTaskContainer}>
        <button className={styles.addTaskButton} onClick={onAddTask}>
          ➕ Add Task
        </button>
      </div>
      {showForm && (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Task Name"
            className={styles.inputField}
            required
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Task Description"
            className={styles.textAreaField}
            required
            rows="3"
          />
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.addButton}>
              Add
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className={styles.cancelButton}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default TodoForm;
