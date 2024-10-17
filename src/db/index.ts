import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import { schemas } from "./schema";
import { TaskModel } from './model/Task';

const adapter = new SQLiteAdapter({
    schema: schemas
});

export const db = new Database({
    adapter,
    modelClasses: [
        TaskModel
    ],
})