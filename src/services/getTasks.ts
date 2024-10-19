import { db } from "../db";
import { TaskModel } from "../db/model/Task";

const taskCollection = db.get<TaskModel>('tasks');

export const getTasks = () => taskCollection.query().fetch();
