import { Model } from '@nozbe/watermelondb'
import { field, date, readonly } from "@nozbe/watermelondb/decorators";

export class TaskModel extends Model {
  static table = 'tasks';

  @field('name')
  name: string;

  @field('done')
  done: boolean;

  @readonly
  @date('created_at')
  createdAt: number;

  @readonly
  @date('updated_at')
  updatedAt: number;
}