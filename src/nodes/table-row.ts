import { ContentNode, Typed } from './index';
import { TableCell } from './table-cell';
import { TableHeader } from './table-header';

export class TableRow {

  private content = new ContentNode<TableHeader | TableCell>('tableRow');

  public cell(): TableCell {
    return this.content.add(new TableCell());
  }

  public header(): TableHeader {
    return this.content.add(new TableHeader());
  }

  public toJSON(): Typed {
    return this.content.toJSON();
  }
}
