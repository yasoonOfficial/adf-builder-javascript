import { InlineNode, Typed } from './index';
export declare function mention(id: string, text: string): Mention;
export declare class Mention extends InlineNode {
    private readonly id;
    private readonly text;
    constructor(id: string, text: string);
    toJSON(): Typed;
}
