import { ApplicationCard } from './application-card';
import { BlockQuote } from './block-quote';
import { BulletList } from './bullet-list';
import { CodeBlock } from './code-block';
import { DecisionList } from './decision-list';
import { Heading } from './heading';
import { ContentNode, TopLevelNode, Typed } from './index';
import { MediaGroup } from './media-group';
import { OrderedList } from './ordered-list';
import { Panel, PanelType } from './panel';
import { Paragraph } from './paragraph';
import { Rule } from './rule';
import { TaskList } from './task-list';

const colorPattern = /^#[0-9a-f]{6}$/;

export class TableCell {

  public content = new ContentNode<TopLevelNode>('tableCell');

  constructor(
    private readonly backgroundColor?: string) {
    if (backgroundColor) {
      if (!colorPattern.test(backgroundColor)) {
        throw new Error(`Color ${backgroundColor} does not match ^#[0-9a-f]{6}$`);
      }
    }
  }

  public paragraph(): Paragraph {
    return this.content.add(new Paragraph());
  }

  public bulletList(): BulletList {
    return this.content.add(new BulletList());
  }

  public orderedList(): OrderedList {
    return this.content.add(new OrderedList());
  }

  public heading(level: number): Heading {
    return this.content.add(new Heading(level));
  }

  public panel(panelType: PanelType): Panel {
    return this.content.add(new Panel(panelType));
  }

  public blockQuote(): BlockQuote {
    return this.content.add(new BlockQuote());
  }

  public rule(): Rule {
    return this.content.add(new Rule());
  }

  public mediaGroup(): MediaGroup {
    return this.content.add(new MediaGroup());
  }

  public applicationCard(title: string, text?: string): ApplicationCard {
    return this.content.add(new ApplicationCard(title, text));
  }

  public decisionList(localId: string): DecisionList {
    return this.content.add(new DecisionList(localId));
  }

  public taskList(localId: string): TaskList {
    return this.content.add(new TaskList(localId));
  }

  public codeBlock(language?: string): CodeBlock {
    return this.content.add(new CodeBlock(language));
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
