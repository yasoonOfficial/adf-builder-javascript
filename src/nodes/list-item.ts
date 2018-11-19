import { BulletList } from './bullet-list';
import { ContentNode, TopLevelNode, Typed } from './index';
import { OrderedList } from './ordered-list';
import { Paragraph } from './paragraph';

export class ListItem {

  public content = new ContentNode<TopLevelNode>('listItem');

  public paragraph(): Paragraph {
    return this.content.add(new Paragraph());
  }

  public bulletList(): BulletList {
    return this.content.add(new BulletList());
  }

  public orderedList(): OrderedList {
    return this.content.add(new OrderedList());
  }

  public toJSON(): Typed {
    return this.content.toJSON();
  }
}
