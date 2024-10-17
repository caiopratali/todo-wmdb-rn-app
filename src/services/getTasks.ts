import { db } from "../db";
import { TaskModel } from "../db/model/Task";

const taskCollection = db.get<TaskModel>('tasks');

export const observeTasks = () => taskCollection.query().observeWithColumns(['done']);
