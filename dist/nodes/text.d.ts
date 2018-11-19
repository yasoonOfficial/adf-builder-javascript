import { Marks } from '../marks/index';
import { InlineNode, Typed } from './index';
export declare function plain(text: string): Text;
export declare function strike(text: string): Text;
export declare function strong(text: string): Text;
export declare function em(text: string): Text;
export declare function link(text: string, href: string, title?: string): Text;
export declare function code(text: string): Text;
export declare class Text extends InlineNode {
    private readonly text;
    private readonly marks;
    constructor(text: string, marks?: Marks | undefined);
    toJSON(): Typed;
}
