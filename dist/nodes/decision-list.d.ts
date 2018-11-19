import { Decision } from './decision';
import { ContentNode, TopLevelNode, Typed } from './index';
export declare class DecisionList extends TopLevelNode {
    private readonly localId;
    content: ContentNode<Decision>;
    constructor(localId: string);
    decision(localId: string, state: string): Decision;
    toJSON(): Typed;
}
