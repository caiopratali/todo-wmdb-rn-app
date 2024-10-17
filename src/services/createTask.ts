import { db } from "../db";
import { TaskModel } from "../db/model/Task";

export const createTask = async (name: string) => {
    const taskCollection = db.get<TaskModel>('tasks')

    db.write(async () => {
      await taskCollection.create(task => {
        task.name = name
        task.done = false
      })
    });
}