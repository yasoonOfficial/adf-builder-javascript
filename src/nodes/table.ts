import { ContentNode, TopLevelNode, Typed } from './index';
import { TableRow } from './table-row';

export class Table extends TopLevelNode {

  private content = new ContentNode<TableRow>('table');

  public row(): TableRow {
    return this.content.add(new TableRow());
  }

  public toJSON(): Typed {
    return this.content.toJSON();
  }
}
