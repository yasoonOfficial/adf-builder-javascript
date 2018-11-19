import { ContentNode, TopLevelNode, Typed } from './index';
import { plain, Text } from './text';

export class CodeBlock extends TopLevelNode {

  public content = new ContentNode<Text>('codeBlock');

  constructor(
    private readonly language?: string) {
    super();
  }

  public text(code: string): this {
    this.content.add(plain(code));
    return this;
  }

  public toJSON(): Typed {
    const codeBlock: Typed = this.content.toJSON();
    if (this.language) {
      codeBlock.attrs = {
        language: this.language
      };
    }
    return codeBlock;
  }
}
