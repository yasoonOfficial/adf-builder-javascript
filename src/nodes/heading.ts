import { ContentNode, TopLevelNode, Typed } from './index';
import { link, plain, Text } from './text';

export class Heading extends TopLevelNode {

  public content = new ContentNode<Text>('heading');

  constructor(
    private readonly level: number) {
    super();
    if (level < 1 || level > 6) {
      throw new Error('Level must be in the range of 1-6');
    }
  }

  public link(text: string, href: string, title?: string): this {
    this.content.add(link(text, href, title));
    return this;
  }

  public text(text: string): this {
    this.content.add(plain(text));
    return this;
  }

  public toJSON(): Typed {
    return {
      ...this.content.toJSON(),
      attrs: {
        level: this.level
      }
    };
  }
}
