import { Mark } from './mark';

export class SubSup extends Mark {

  constructor(
    private readonly variant: 'sub' | 'sup') {
    super('subsup');
  }

  public toJSON() {
    return {
      type: this.type,
      attrs: {
        type: this.variant
      }
    };
  }
}
