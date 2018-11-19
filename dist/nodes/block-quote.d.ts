import { ContentNode, TopLevelNode, Typed } from './index';
import { Paragraph } from './paragraph';
export declare class BlockQuote extends TopLevelNode {
    content: ContentNode<Paragraph>;
    paragraph(): Paragraph;
    toJSON(): Typed;
}
