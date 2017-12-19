import { Mark } from './mark';

export interface ActionTarget {
  receiver?: string;
  key: string;
}

export class Action extends Mark {

  constructor(
    private readonly title: string,
    private readonly target: ActionTarget,
    private readonly actionParameters?: object) {
    super('action');
  }

  public toJSON() {
    const actionMark: any = {
      type: this.type,
      attrs: {
        title: this.title,
        target: this.target
      }
    };

    if (this.actionParameters) {
      actionMark.attrs.parameters = this.actionParameters;
    }
    return actionMark;
  }
}
