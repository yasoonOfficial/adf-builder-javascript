import { marks as mark, Marks } from '../marks/index';
import { InlineNode, Typed } from './index';

export function plain(text: string): Text {
  return new Text(text);
}

export function strike(text: string): Text {
  return new Text(text, mark().strike());
}

export function strong(text: string): Text {
  return new Text(text, mark().strong());
}

export function em(text: string): Text {
  return new Text(text, mark().em());
}

export function link(text: string, href: string, title?: string): Text {
  return new Text(text, mark().link(href, title));
}

export function code(text: string): Text {
  return new Text(text, mark().code());
}

export class Text extends InlineNode {

  constructor(
    private readonly text: string,
    private readonly marks?: Marks) {
    super();
    if (!text || text.length === 0) {
      throw new Error('Text must be at least one character long');
    }
  }

  public toJSON(): Typed {
    const textNode: Typed = {
      type: 'text',
      text: this.text,
    };
    if (this.marks) {
      textNode.marks = this.marks.toJSON();
    }
    return textNode;
  }
}
