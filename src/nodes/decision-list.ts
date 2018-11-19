import { Decision } from './decision';
import { ContentNode, TopLevelNode, Typed } from './index';

export class DecisionList extends TopLevelNode {

  public content = new ContentNode<Decision>('decisionList');

  constructor(
    private readonly localId: string) {
    super();
  }

  public decision(localId: string, state: string): Decision {
    return this.content.add(new Decision(localId, state));
  }

  public toJSON(): Typed {
    return {
      ...this.content.toJSON(),
      attrs: {
        localId: this.localId
      }
    };
  }

}
