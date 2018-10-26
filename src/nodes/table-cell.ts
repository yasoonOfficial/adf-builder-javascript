import { BlockQuote } from './block-quote';
import { BulletList } from './bullet-list';
import { CodeBlock } from './code-block';
import { Heading } from './heading';
import { ContentNode, TopLevelNode, Typed } from './index';
import { MediaGroup } from './media-group';
import { OrderedList } from './ordered-list';
import { Panel, PanelType } from './panel';
import { Paragraph } from './paragraph';
import { Rule } from './rule';

const colorPattern = /^#[0-9a-f]{6}$/;

export class TableCell {

  private content = new ContentNode<TopLevelNode>('tableCell');

  constructor(
    private readonly backgroundColor: string = '#ffffff') {
    if (!colorPattern.test(backgroundColor)) {
      throw new Error(`Color ${backgroundColor} does not match ^#[0-9a-f]{6}$`);
    }
  }

  public panel(panelType: PanelType): Panel {
    return this.content.add(new Panel(panelType));
  }

  public paragraph(): Paragraph {
    return this.content.add(new Paragraph());
  }

  public blockQuote(): BlockQuote {
    return this.content.add(new BlockQuote());
  }

  public orderedList(): OrderedList {
    return this.content.add(new OrderedList());
  }

  public bulletList(): BulletList {
    return this.content.add(new BulletList());
  }

  public rule(): Rule {
    return this.content.add(new Rule());
  }

  public heading(level: number): Heading {
    return this.content.add(new Heading(level));
  }

  public codeBlock(language?: string): CodeBlock {
    return this.content.add(new CodeBlock(language));
  }

  public mediaGroup(): MediaGroup {
    return this.content.add(new MediaGroup());
  }

  public toJSON(): Typed {
    return {
      ...this.content.toJSON(),
      attrs: {
        background: this.backgroundColor
      }
    };
  }
}
