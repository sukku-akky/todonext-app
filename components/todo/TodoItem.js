import React from "react";
import classes from "./TodoItem.module.css";
import fetchUpdatedTasks from "../../actions/getTasks";
const TodoItem = ({ id, title, description, onDelete, onEdit ,onUpdateTaskStatus}) => {
  const checkHandler =  () => {
   onUpdateTaskStatus(id);
  };
  const handleDelete=()=>{
    onDelete(id);

  }
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
      <button className={classes.deleteBtn} onClick={handleDelete}>
        🗑️
      </button>
      <button className={classes.editBtn} onClick={() => onEdit(id)}>
        ✏️
      </button>
    </li>
  );
};

export default TodoItem;
