import { ContentNode, TopLevelNode, Typed } from './index';
import { TableRow } from './table-row';
export declare class Table extends TopLevelNode {
    content: ContentNode<TableRow>;
    row(): TableRow;
    add(node: TableRow): this;
    toJSON(): Typed;
}
