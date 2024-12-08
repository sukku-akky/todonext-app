import React from "react";
import classes from "./CompletedTodos.module.css"; // Assuming you have some CSS for this component

const CompletedTodos = ({ todos }) => {
  

  // Check if there are any completed todos
  if (todos.length === 0) {
    return (
      <div className={classes.completedTodos}>
        <h2>No completed todos found.</h2>
      </div>
    );
  }

  return (
    <div className={classes.completedTodos}>
      <h2>Completed Todos</h2>
      <ul className={classes.todoList}>
        {todos.map((todo) => (
          <li key={todo.id} className={classes.todoItem}>
            <div className={classes.content}>
              <input type="checkbox" checked disabled className={classes.checkbox} />
              <div className={classes.textContent}>
                <h3 className={classes.title}>{todo.title}</h3>
                <p className={classes.description}>{todo.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedTodos;


