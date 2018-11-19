import { BulletList } from './bullet-list';
import { Heading } from './heading';
import { ContentNode, TopLevelNode, Typed } from './index';
import { OrderedList } from './ordered-list';
import { Paragraph } from './paragraph';
export declare type PanelType = 'info' | 'note' | 'tip' | 'warning';
export declare class Panel extends TopLevelNode {
    private readonly panelType;
    content: ContentNode<TopLevelNode>;
    constructor(panelType: PanelType);
    heading(level: number): Heading;
    paragraph(): Paragraph;
    orderedList(): OrderedList;
    bulletList(): BulletList;
    toJSON(): Typed;
}
