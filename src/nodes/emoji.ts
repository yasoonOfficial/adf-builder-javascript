import { InlineNode, Typed } from './index';

export function emoji(shortName: string, id?: string, text?: string) {
  return new Emoji({ shortName, id, text });
}

export interface EmojiAttributes {
  shortName: string;
  id?: string;
  text?: string;
}

export class Emoji extends InlineNode {
  constructor(
    private readonly attrs: EmojiAttributes) {
    super();
  }

  public toJSON(): Typed {
    const emojiNode: Typed = {
      type: 'emoji',
      attrs: {
        shortName: this.attrs.shortName
      }
    };
    if (this.attrs.id) {
      emojiNode.attrs.id = this.attrs.id;
    }
    if (this.attrs.text) {
      emojiNode.attrs.text = this.attrs.text;
    }
    return emojiNode;
  }
}
