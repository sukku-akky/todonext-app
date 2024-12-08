import TodoForm from "../../components/todo/TodoForm";
import TodoList from "../../components/todo/TodoList";
import { MongoClient } from "mongodb";
import { useState } from "react";

const Todos = (props) => {
  const [todos, setTodos] = useState(props.todoTasks);
  async function addTaskHandler(enteredDetails) {
    const response = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify(enteredDetails),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      console.error("Error:", response.status, response.statusText);
      const text = await response.text();
      console.error("Response body:", text);
      return;
    }
    const data = await response.json();
    console.log(data);
    await fetchUpdatedTasks();
  }

  async function fetchUpdatedTasks() {
    const response = await fetch("/api/todos");
    if (!response.ok) {
      console.error("Failed to fetch tasks:", response.statusText);
      return;
    }

    const updatedTasks = await response.json();
    setTodos(
      updatedTasks.map((task) => ({
        id: task._id.toString(),
        title: task.task,
        description: task.description,
      }))
    );
  }
  return (
    <>
      <TodoList todos={todos.length > 0 ? todos : props.todoTasks} />
      <TodoForm onAddTaskDetails={addTaskHandler} />
    </>
  );
};

export default Todos;

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://cherukupallisukanya808:AgZ10jmW5yIc2TVg@cluster0.pv2ep.mongodb.net/todos?retryWrites=true&w=majority&appName=Cluster0"
  );

  const db = client.db();
  console.log(db);
  const meetupsCollection = db.collection("tasks");
  const tasks = await meetupsCollection.find({ status: false }).toArray();
  console.log(tasks);
  // Log or process the fetched tasks
  console.log("Tasks with status false:", tasks);
  return {
    props: {
      todoTasks: tasks.map((task) => ({
        id: task._id.toString(),
        title: task.task,
        description: task.description,
      })),
    },
    revalidate: 1,
  };
}
