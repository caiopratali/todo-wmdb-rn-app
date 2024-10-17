import { appSchema } from "@nozbe/watermelondb";

import { taskSchema } from "./Task";

export const schemas = appSchema({
    version: 1,
    tables: [
      taskSchema
    ]
});