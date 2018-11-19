import { ContentNode, TopLevelNode, Typed } from './nodes';
import { ApplicationCard } from './nodes/application-card';
import { BlockQuote } from './nodes/block-quote';
import { BulletList } from './nodes/bullet-list';
import { CodeBlock } from './nodes/code-block';
import { DecisionList } from './nodes/decision-list';
import { Heading } from './nodes/heading';
import { MediaGroup } from './nodes/media-group';
import { OrderedList } from './nodes/ordered-list';
import { Panel, PanelType } from './nodes/panel';
import { Paragraph } from './nodes/paragraph';
import { Rule } from './nodes/rule';
import { Table } from './nodes/table';
import { TaskList } from './nodes/task-list';

export interface DocumentAttributes {
  version: 1;
}

export class Document {

  public content = new ContentNode<TopLevelNode>('doc');

  constructor(
    private readonly attrs: DocumentAttributes = { version: 1 }) {
  }

  public applicationCard(title: string, text?: string): ApplicationCard {
    return this.content.add(new ApplicationCard(title, text));
  }

  public blockQuote(): BlockQuote {
    return this.content.add(new BlockQuote());
  }

  public bulletList(): BulletList {
    return this.content.add(new BulletList());
  }

  public codeBlock(language?: string): CodeBlock {
    return this.content.add(new CodeBlock(language));
  }

  public decisionList(localId: string): DecisionList {
    return this.content.add(new DecisionList(localId));
  }

  public heading(level: number): Heading {
    return this.content.add(new Heading(level));
  }

  public textHeading(level: number, text: string): Heading {
    return this.content.add(new Heading(level).text(text));
  }

  public mediaGroup(): MediaGroup {
    return this.content.add(new MediaGroup());
  }

  public orderedList(): OrderedList {
    return this.content.add(new OrderedList());
  }

  public panel(type: PanelType): Panel {
    return this.content.add(new Panel(type));
  }

  public paragraph(): Paragraph {
    return this.content.add(new Paragraph());
  }

  public rule(): this {
    this.content.add(new Rule());
    return this;
  }

  public table(): Table {
    return this.content.add(new Table());
  }

  public taskList(localId: string): TaskList {
    return this.content.add(new TaskList(localId));
  }

  public toJSON(): Typed {
    return {
      ...this.content.toJSON(),
      version: this.attrs.version,
    };
  }

  public toString() {
    return JSON.stringify(this);
  }
}
