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
      throw new Error(`There must be at least ${this.minLength} content elements`);
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
}

export abstract class TopLevelNode implements JSONable {
  public abstract toJSON(): Typed;
}

export abstract class InlineNode implements JSONable {
  public abstract toJSON(): Typed;
}
