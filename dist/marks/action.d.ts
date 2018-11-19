import { Mark } from './mark';
export interface ActionTarget {
    receiver?: string;
    key: string;
}
export declare class Action extends Mark {
    private readonly title;
    private readonly target;
    private readonly actionParameters;
    constructor(title: string, target: ActionTarget, actionParameters?: object | undefined);
    toJSON(): any;
}
