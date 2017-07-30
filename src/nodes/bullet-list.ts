import { ContentNode, TopLevelNode, Typed } from './index';
import { ListItem } from './list-item';

export class BulletList extends TopLevelNode {

  private content = new ContentNode<ListItem>('bulletList');

  public item(): ListItem {
    return this.content.add(new ListItem());
  }

  public toJSON(): Typed {
    return this.content.toJSON();
  }
}
