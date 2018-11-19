import { Marks } from '../marks/index';
import { Emoji } from './emoji';
import { HardBreak } from './hard-break';
import { ContentNode, InlineNode, Typed } from './index';
import { Mention } from './mention';
import { code, em, link, strike, strong, Text } from './text';

export class Task {

  public content = new ContentNode<InlineNode>('taskItem');

  constructor(
    private readonly localId: string,
    private readonly state: TaskState) {
  }

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

  public strike(text: string): this {
    return this.add(strike(text));
  }

  public strong(text: string): this {
    return this.add(strong(text));
  }

  public mention(id: string, text: string): this {
    return this.add(new Mention(id, text));
  }

  public emoji(shortName: string, id?: string, text?: string): this {
    return this.add(new Emoji({ shortName, id, text }));
  }

  public hardBreak(): this {
    return this.add(new HardBreak());
  }

  public add(node: InlineNode): this {
    this.content.add(node);
    return this;
  }

  public toJSON(): Typed {
    return {
      ...this.content.toJSON(),
      attrs: {
        localId: this.localId,
        state: this.state
      }
    };
  }
}

export enum TaskState {
  TODO = 'TODO',
  DONE = 'DONE'
}
