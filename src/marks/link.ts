import { Mark } from './mark';

export class Link extends Mark {

  constructor(
    private readonly href: string,
    private readonly title?: string) {
    super('link');
  }

  public toJSON() {
    const linkMark: any = {
      type: this.type,
      attrs: {
        href: this.href
      }
    };
    if (this.title) {
      linkMark.attrs.title = this.title;
    }
    return linkMark;
  }
}
