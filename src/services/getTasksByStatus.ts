import { Q } from "@nozbe/watermelondb";
import { db } from "../db";
import { TaskModel } from "../db/model/Task";

export const getTasksByStatus = async (status: boolean) => {
    const taskCollection = db.get<TaskModel>('tasks')

    return await taskCollection.query(
        Q.where('done', status)
    ).fetch();
}