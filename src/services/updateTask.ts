import { db } from "../db"
import { getTaskById } from "./getTaskById";

export const updateTask = async (id: string, status: boolean) => {
    const task = await getTaskById(id);

    await db.write(async () => {
        await task.update(() => {
          task.done = status;
        })
      })
}