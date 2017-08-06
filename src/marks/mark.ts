export abstract class Mark {

  constructor(
    public readonly type: string) {
  }

  public toJSON() {
    return {
      type: this.type
    };
  }
}
