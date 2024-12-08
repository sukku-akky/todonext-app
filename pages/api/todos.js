import { MongoClient, ObjectId } from "mongodb";

export default async function handler(req, res) {
  let client;
  try {
    client = await MongoClient.connect(
      "mongodb+srv://cherukupallisukanya808:AgZ10jmW5yIc2TVg@cluster0.pv2ep.mongodb.net/todos?retryWrites=true&w=majority&appName=Cluster0"
    );
    const db = client.db();
    const meetupsCollection = db.collection("tasks");

    if (req.method === "GET") {
      const tasks = await meetupsCollection.find({ status: false }).toArray();
      res.status(200).json(tasks);
    } else if (req.method === "POST") {
      const data = req.body;
      
      const result = await meetupsCollection.insertOne(data);
      res
        .status(201)
        .json({ message: "Task created", taskId: result.insertedId });
    } else if (req.method === "PUT") {
      const { id } = req.query;
      const { status } = req.body;
      if (status === undefined)
        return res.status(400).json({ message: "Status is required" });
      await meetupsCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: { status } }
      );
      res.status(200).json({ message: "Task updated" });
    } else if (req.method === "DELETE") {
      const { id } = req.query;
      await meetupsCollection.deleteOne({ _id: new ObjectId(id) });
      res.status(200).json({ message: "Task deleted" });
    } else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  } finally {
    if (client) client.close();
  }
}
