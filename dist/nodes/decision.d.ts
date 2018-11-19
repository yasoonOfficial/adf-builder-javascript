import { Marks } from '../marks/index';
import { ContentNode, InlineNode, Typed } from './index';
export declare class Decision {
    private readonly localId;
    private readonly state;
    content: ContentNode<InlineNode>;
    constructor(localId: string, state: string);
    text(text: string, marks?: Marks): this;
    code(text: string): this;
    em(text: string): this;
    link(text: string, href: string, title?: string): this;
    strike(text: string): this;
    strong(text: string): this;
    mention(id: string, text: string): this;
    emoji(shortName: string, id?: string, text?: string): this;
    hardBreak(): this;
    add(node: InlineNode): this;
    toJSON(): Typed;
}
