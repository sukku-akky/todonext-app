export default async function fetchUpdatedTasks() {
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