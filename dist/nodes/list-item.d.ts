import { BulletList } from './bullet-list';
import { ContentNode, TopLevelNode, Typed } from './index';
import { OrderedList } from './ordered-list';
import { Paragraph } from './paragraph';
export declare class ListItem {
    content: ContentNode<TopLevelNode>;
    paragraph(): Paragraph;
    bulletList(): BulletList;
    orderedList(): OrderedList;
    toJSON(): Typed;
}
