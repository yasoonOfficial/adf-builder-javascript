import { Marks } from '../index';
import { ContentNode, TopLevelNode, Typed } from './index';
import { ListItem } from './list-item';

export class BulletList extends TopLevelNode {

  public content = new ContentNode<ListItem>('bulletList');

  public item(): ListItem {
    return this.content.add(new ListItem());
  }

  public textItem(text: string, marks?: Marks): this {
    this.item().paragraph().text(text, marks);
    return this;
  }

  public linkItem(text: string, href: string, title?: string): this {
    this.item().paragraph().link(text, href, title);
    return this;
  }

  public toJSON(): Typed {
    return this.content.toJSON();
  }
}
