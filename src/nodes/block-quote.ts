import { ContentNode, TopLevelNode, Typed } from './index';
import { Paragraph } from './paragraph';

export class BlockQuote extends TopLevelNode {

  public content = new ContentNode<Paragraph>('blockquote');

  public paragraph(): Paragraph {
    return this.content.add(new Paragraph());
  }

  public toJSON(): Typed {
    return this.content.toJSON();
  }
}
