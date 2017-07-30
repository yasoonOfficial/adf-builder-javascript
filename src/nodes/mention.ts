import { InlineNode, Typed } from './index';

export function mention(id: string, text: string) {
  return new Mention(id, text);
}
export class Mention extends InlineNode {

  constructor(
    private readonly id: string,
    private readonly text: string) {
    super();
  }

  public toJSON(): Typed {
    return {
      type: 'mention',
      attrs: {
        id: this.id,
        text: this.text
      }
    };
  }
}
