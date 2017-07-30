import { InlineNode, Typed } from './index';

export function hardBreak() {
  return new HardBreak();
}

export class HardBreak extends InlineNode {
  public toJSON(): Typed {
    return {
      type: 'hardBreak',
      attrs: {
        text: '\n'
      }
    };
  }
}
