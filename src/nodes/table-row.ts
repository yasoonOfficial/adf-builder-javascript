import { ContentNode, Typed } from './index';
import { TableCell } from './table-cell';
import { TableHeader } from './table-header';

export class TableRow {

  public content = new ContentNode<TableHeader | TableCell>('tableRow');

  public cell(backgroundColor?: string): TableCell {
    return this.content.add(new TableCell(backgroundColor));
  }

  public header(backgroundColor?: string): TableHeader {
    return this.content.add(new TableHeader(backgroundColor));
  }

  public add(node: TableCell | TableHeader): this {
    this.content.add(node);
    return this;
  }

  public toJSON(): Typed {
    return this.content.toJSON();
  }
}
