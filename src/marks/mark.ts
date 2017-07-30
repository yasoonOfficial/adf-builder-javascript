export abstract class Mark {

  constructor(
    protected readonly type: string) {
  }

  public toJSON() {
    return {
      type: this.type
    };
  }
}
