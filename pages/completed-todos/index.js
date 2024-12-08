import CompletedTodos from "../../components/todo/CompletedTodos";
import { MongoClient } from "mongodb";
import React from "react";

const DoneTasks = (props) => {
  return <CompletedTodos todos={props.todos} />;
};

export default DoneTasks;

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://cherukupallisukanya808:AgZ10jmW5yIc2TVg@cluster0.pv2ep.mongodb.net/todos?retryWrites=true&w=majority&appName=Cluster0"
  );

  const db = client.db();
  const meetupsCollection = db.collection("tasks");
  const tasks = await meetupsCollection.find({ status: true }).toArray();

  client.close();

  return {
    props: {
      todos: tasks.map((task) => ({
        id: task._id.toString(),
        title: task.task,
        description: task.description,
      })),
    },
    revalidate: 1, // revalidate every 1 second
  };
}
