import { ContentNode, TopLevelNode, Typed } from './index';
import { Text } from './text';
export declare class CodeBlock extends TopLevelNode {
    private readonly language;
    content: ContentNode<Text>;
    constructor(language?: string | undefined);
    text(code: string): this;
    toJSON(): Typed;
}
