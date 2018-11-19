import { ContentNode, TopLevelNode, Typed } from './index';
import { TableRow } from './table-row';

export class Table extends TopLevelNode {

  public content = new ContentNode<TableRow>('table');

  public row(): TableRow {
    return this.content.add(new TableRow());
  }

  public add(node: TableRow): this {
    this.content.add(node);
    return this;
  }

  public toJSON(): Typed {
    return this.content.toJSON();
  }
}
