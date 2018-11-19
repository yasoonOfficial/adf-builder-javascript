import { ContentNode, Typed } from './index';
import { TableCell } from './table-cell';
import { TableHeader } from './table-header';
export declare class TableRow {
    content: ContentNode<TableCell | TableHeader>;
    cell(backgroundColor?: string): TableCell;
    header(backgroundColor?: string): TableHeader;
    add(node: TableCell | TableHeader): this;
    toJSON(): Typed;
}
