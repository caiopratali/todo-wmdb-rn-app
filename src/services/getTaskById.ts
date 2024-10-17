import { db } from "../db";
import { TaskModel } from "../db/model/Task";

export const getTaskById = async (id: string) => {
    const taskCollection = db.get<TaskModel>('tasks')

    return await taskCollection.find(id);
}