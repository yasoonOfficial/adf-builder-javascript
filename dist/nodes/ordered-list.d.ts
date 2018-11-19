import { Marks } from '../index';
import { ContentNode, TopLevelNode, Typed } from './index';
import { ListItem } from './list-item';
export declare class OrderedList extends TopLevelNode {
    content: ContentNode<ListItem>;
    item(): ListItem;
    textItem(text: string, marks?: Marks): this;
    linkItem(text: string, href: string, title?: string): this;
    toJSON(): Typed;
}
