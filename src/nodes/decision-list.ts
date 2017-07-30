import { Decision } from './decision';
import { ContentNode, TopLevelNode, Typed } from './index';

export class DecisionList extends TopLevelNode {

  private content = new ContentNode<Decision>('decisionList');

  public decision(localId: string, state: string): Decision {
    return this.content.add(new Decision(localId, state));
  }

  public toJSON(): Typed {
    return this.content.toJSON();
  }

}
