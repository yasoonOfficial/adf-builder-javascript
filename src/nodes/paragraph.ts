import { Marks } from '../marks/index';
import { Emoji } from './emoji';
import { HardBreak } from './hard-break';
import { ContentNode, InlineNode, TopLevelNode, Typed } from './index';
import { Mention } from './mention';
import { code, em, link, strong, Text } from './text';

export class Paragraph extends TopLevelNode {

  public content = new ContentNode<InlineNode>('paragraph');

  public text(text: string, marks?: Marks): this {
    return this.add(new Text(text, marks));
  }

  public code(text: string): this {
    return this.add(code(text));
  }

  public em(text: string): this {
    return this.add(em(text));
  }

  public link(text: string, href: string, title?: string): this {
    return this.add(link(text, href, title));
  }

  public strong(text: string): this {
    return this.add(strong(text));
  }

  public mention(id: string, text: string): this {
    return this.add(new Mention(id, text));
  }

  public emoji(shortName: string, id?: string, text?: string): this {
    return this.add(new Emoji({shortName, id, text}));
  }

  public hardBreak(): this {
    return this.add(new HardBreak());
  }

  public add(node: InlineNode): this {
    this.content.add(node);
    return this;
  }

  public toJSON(): Typed {
    return this.content.toJSON();
  }
}
