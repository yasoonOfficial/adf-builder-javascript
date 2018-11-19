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
import { Table } from './nodes/table';
import { TaskList } from './nodes/task-list';
export interface DocumentAttributes {
    version: 1;
}
export declare class Document {
    private readonly attrs;
    content: ContentNode<TopLevelNode>;
    constructor(attrs?: DocumentAttributes);
    applicationCard(title: string, text?: string): ApplicationCard;
    blockQuote(): BlockQuote;
    bulletList(): BulletList;
    codeBlock(language?: string): CodeBlock;
    decisionList(localId: string): DecisionList;
    heading(level: number): Heading;
    textHeading(level: number, text: string): Heading;
    mediaGroup(): MediaGroup;
    orderedList(): OrderedList;
    panel(type: PanelType): Panel;
    paragraph(): Paragraph;
    rule(): this;
    table(): Table;
    taskList(localId: string): TaskList;
    toJSON(): Typed;
    toString(): string;
}
