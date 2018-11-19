import { ContentNode, TopLevelNode, Typed } from './index';
import { Task, TaskState } from './task';
export declare class TaskList extends TopLevelNode {
    private readonly localId;
    content: ContentNode<Task>;
    constructor(localId: string);
    task(localId: string, state: TaskState): Task;
    toJSON(): Typed;
}
