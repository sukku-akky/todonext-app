import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem = ({ id, title, description, onDelete, onEdit }) => {
  const checkHandler = async () => {
    try {
      const response = await fetch(`/api/todos?id=${id}`, {
        method: "PUT",
        body: JSON.stringify({ status: true }), // Update the status to true
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to update status");
      }

      const data = await response.json();
      console.log(data.message); // Log success message or handle UI update
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };
  return (
    <li className={classes.todoItem}>
      <div className={classes.content}>
        <input
          type="checkbox"
          onClick={checkHandler}
          
          className={classes.checkbox}
        />
        <div className={classes.textContent}>
          <h3 className={classes.title}>{title}</h3>
          <p className={classes.description}>{description}</p>
        </div>
      </div>
      <button className={classes.deleteBtn} onClick={() => onDelete(id)}>
        🗑️
      </button>
      <button className={classes.editBtn} onClick={() => onEdit(id)}>
        ✏️
      </button>
    </li>
  );
};

export default TodoItem;
