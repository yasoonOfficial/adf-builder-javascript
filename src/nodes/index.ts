export interface Typed {
  type: string;
  [key: string]: any;
}

export interface JSONable {
  toJSON: () => Typed;
}

export class ContentNode<T extends JSONable> {

  private content: T[] = [];

  constructor(
    private readonly type: string,
    private readonly minLength: number = 1) {
  }

  public toJSON() {
    if (this.content.length < this.minLength) {
      return {
        type: this.type,
        //We cannot import Paragraph as it is the subclass :(
        //content: [new Paragraph().text(' ').toJSON()] 
        content: [{
          type: 'paragraph',
          content: [{
            type: 'text',
            text: ' '
          }]
        }]
      };
    }
    return {
      type: this.type,
      content: this.content.map(node => node.toJSON())
    };
  }

  public add<U extends T>(node: U): U {
    if (!node) {
      throw new Error('Illegal value');
    }
    this.content.push(node);
    return node;
  }

  public get length(): number {
    return this.content.length;
  }

  public getItem(index: number): T {
    return this.content[index];
  }
}

export abstract class TopLevelNode implements JSONable {
  public abstract toJSON(): Typed;
}

export abstract class InlineNode implements JSONable {
  public abstract toJSON(): Typed;
}