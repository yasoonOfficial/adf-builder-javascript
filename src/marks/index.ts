import { Action, ActionTarget } from './action';
import { Code } from './code';
import { Em } from './em';
import { Link } from './link';
import { Mark } from './mark';
import { Strong } from './strong';
import { SubSup } from './subsup';
import { TextColor } from './text-color';
import { Underline } from './underline';

export function marks(): Marks {
  return new Marks();
}

export class Marks {

  private marks: Mark[] = [];

  public code(): this {
    return this.add(new Code());
  }

  public em(): this {
    return this.add(new Em());
  }

  public link(href: string, title?: string): this {
    return this.add(new Link(href, title));
  }

  public strong(): this {
    return this.add(new Strong());
  }

  public sub(): this {
    return this.add(new SubSup('sub'));
  }

  public sup(): this {
    return this.add(new SubSup('sup'));
  }

  public color(color: string): this {
    return this.add(new TextColor(color));
  }

  public underline(): this {
    return this.add(new Underline());
  }

  public action(title: string, target: ActionTarget, actionParameters?: object): this {
    return this.add(new Action(title, target, actionParameters));
  }

  public toJSON() {
    if (this.marks.length === 0) {
      throw new Error('At least one mark is required');
    }
    return this.marks.map(mark => mark.toJSON());
  }

  private add(mark: Mark): this {
    const existing = this.marks.filter(m => m.type === mark.type);
    if (existing.length > 0) {
      throw new Error('A mark type can only be used once');
    }
    this.marks.push(mark);
    return this;
  }

}
