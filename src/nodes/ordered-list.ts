import { ContentNode, TopLevelNode, Typed } from './index';
import { ListItem } from './list-item';

export class OrderedList extends TopLevelNode {

  private content = new ContentNode<ListItem>('orderedList');

  public item(): ListItem {
    return this.content.add(new ListItem());
  }

  public toJSON(): Typed {
    return this.content.toJSON();
  }
}
