import { db } from "../db"
import { getTaskById } from "./getTaskById";

interface Props {
    id: string;
    isCompleted: boolean;
}

export const updateTask = async ({ id, isCompleted }: Props) => {
    const task = await getTaskById(id);

    await db.write(async () => {
      await task.update(() => {
        task.done = isCompleted;
      })
    })

    return { ok: true}
}