import { ActionTarget } from './action';
export declare function marks(): Marks;
export declare class Marks {
    private marks;
    code(): this;
    em(): this;
    link(href: string, title?: string): this;
    strike(): this;
    strong(): this;
    sub(): this;
    sup(): this;
    color(color: string): this;
    underline(): this;
    action(title: string, target: ActionTarget, actionParameters?: object): this;
    toJSON(): {
        type: string;
    }[];
    private add(mark);
}
