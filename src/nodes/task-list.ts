import { Task, TaskState } from './task';
import { ContentNode, TopLevelNode, Typed } from './index';

export class TaskList extends TopLevelNode {

  private content = new ContentNode<Task>('taskList');

  constructor(
    private readonly localId: string) {
    super();
  }

  public task(localId: string, state: TaskState): Task {
    return this.content.add(new Task(localId, state));
  }

  public toJSON(): Typed {
    return {
      ...this.content.toJSON(),
      attrs: {
        localId: this.localId
      }
    };
  }

}
