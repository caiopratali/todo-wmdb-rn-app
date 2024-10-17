import { tableSchema } from '@nozbe/watermelondb'

export const taskSchema = tableSchema({
    name: 'tasks',
    columns: [
        { name: 'name', type: 'string' },
        { name: 'done', type: 'boolean' },
    ]
})