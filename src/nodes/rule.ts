import { TopLevelNode, Typed } from './index';

export class Rule extends TopLevelNode {
  public toJSON(): Typed {
    return {
      type: 'rule'
    };
  }
}
