import { ContentNode, TopLevelNode, Typed } from './index';
import { Text } from './text';
export declare class Heading extends TopLevelNode {
    private readonly level;
    content: ContentNode<Text>;
    constructor(level: number);
    link(text: string, href: string, title?: string): this;
    text(text: string): this;
    toJSON(): Typed;
}
