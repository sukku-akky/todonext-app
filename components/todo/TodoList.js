import classes from "./TodoList.module.css";
import TodoItem from "./TodoItem";
const TodoList = ({ todos ,onUpdateTaskStatus}) => {
  const onDeleteTodo = (id) => {
    console.log(`Delete todo with id: ${id}`);
    // Add deletion logic here
  };

  const onEditTodo = (id) => {
    console.log(`Edit todo with id: ${id}`);
    // Add editing logic here
  };
  if (!todos || todos.length === 0) {
    return (
      <div className={classes.todoList}>
        <h2>Your Todos</h2>
        <p>No todos found. Start adding some!</p>
      </div>
    );
  }

  return (
    <div className={classes.todoList}>
      <h2>Your Todos</h2>
      <ul className={classes.ul}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
            onEdit={onEditTodo}
            onDelete={onDeleteTodo}
            onUpdateTaskStatus={onUpdateTaskStatus}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
