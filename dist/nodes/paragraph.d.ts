import { Marks } from '../marks/index';
import { ContentNode, InlineNode, TopLevelNode, Typed } from './index';
export declare class Paragraph extends TopLevelNode {
    content: ContentNode<InlineNode>;
    text(text: string, marks?: Marks): this;
    code(text: string): this;
    em(text: string): this;
    link(text: string, href: string, title?: string): this;
    strong(text: string): this;
    mention(id: string, text: string): this;
    emoji(shortName: string, id?: string, text?: string): this;
    hardBreak(): this;
    add(node: InlineNode): this;
    toJSON(): Typed;
}
