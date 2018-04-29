import { TopLevelNode, Typed } from './index';

export interface Icon {
  url: string;
  label: string;
}

export interface DetailLozenge {
  text: string;
  bold?: boolean;
  appearance?: 'default' | 'removed' | 'success' | 'inprogress' | 'new' | 'moved';
}

export interface DetailBadge {
  value: number;
  max?: number;
  appearance?: 'default' | 'primary' | 'important' | 'added' | 'removed';
}

export interface DetailUser {
  id?: string;
  icon: Icon;
}

export interface ActionTarget {
  receiver?: string;
  key: string;
}

export class Action {
  private actionTitle: string;
  private actionTarget: ActionTarget;
  private actionParameters?: object;

  public title(title: string): this {
    this.actionTitle = title;
    return this;
  }

  public target(target: ActionTarget): this {
    if (!target.key) {
      throw new Error('Action target key is required');
    }
    this.actionTarget = target;
    return this;
  }

  public parameters(parameters: object): this {
    this.actionParameters = parameters;
    return this;
  }

  public toJSON() {
    const action: any = {};
    if (this.actionTitle) {
      action.title = this.actionTitle;
    }
    if (this.actionTarget) {
      action.target = this.actionTarget;
    }
    if (this.actionParameters) {
      action.parameters = this.actionParameters;
    }
    if (Object.keys(action).length < 2) {
      throw new Error('Must set title and target attributes for action');
    }
    return action;
  }
}

export class Detail {

  private detailTitle: string;
  private detailText: string;
  private detailLozenge: DetailLozenge;
  private detailIcon: Icon;
  private detailBadge: DetailBadge;
  private detailUsers: DetailUser[] = [];

  public title(text: string): this {
    this.detailTitle = text;
    return this;
  }

  public text(text: string): this {
    this.detailText = text;
    return this;
  }

  public lozenge(lozenge: DetailLozenge): this {
    this.detailLozenge = lozenge;
    return this;
  }

  public icon(icon: Icon): this {
    this.detailIcon = icon;
    return this;
  }

  public badge(badge: DetailBadge): this {
    this.detailBadge = badge;
    return this;
  }

  public user(user: DetailUser): this {
    this.detailUsers.push(user);
    return this;
  }

  public toJSON() {
    const detail: any = {};
    if (this.detailTitle) {
      detail.title = this.detailTitle;
    }
    if (this.detailText) {
      detail.text = this.detailText;
    }
    if (this.detailIcon) {
      detail.icon = this.detailIcon;
    }
    if (this.detailBadge) {
      detail.badge = this.detailBadge;
    }
    if (this.detailLozenge) {
      detail.lozenge = this.detailLozenge;
    }
    if (this.detailUsers.length > 0) {
      detail.users = this.detailUsers;
    }
    if (Object.keys(detail).length === 0) {
      throw new Error('Must at least set one attribute');
    }
    return detail;
  }
}

export class Context {
  private contextIcon: Icon;

  public constructor(private text: string) {
  }

  public icon(icon: Icon): this {
    this.contextIcon = icon;
    return this;
  }

  public toJSON() {
    const context: Partial<Typed> = {
      text: this.text
    };
    if (this.contextIcon) {
      context.icon = this.contextIcon;
    }
    return context;
  }
}

export class TitleUser {
  private titleUserId?: string;

  public constructor(private titleUserIcon: Icon) {
  }

  public id(id: string): this {
    this.titleUserId = id;
    return this;
  }

  public toJSON() {
    const titleUser: any = {
      icon: this.titleUserIcon
    };
    if (this.titleUserId) {
      titleUser.id = this.titleUserId;
    }
    return titleUser;
  }
}

export class ApplicationCard extends TopLevelNode {

  private linkUrl: string;
  private backgroundUrl: string;
  private previewUrl: string;
  private isCollapsible: boolean = false;
  private descriptionText: string;
  private userInTitle: TitleUser;

  private details: Detail[] = [];
  private actions: Action[] = [];
  private cardContext: Context;

  constructor(
    private readonly title: string,
    private readonly text?: string) {
    super();
  }

  public link(url: string): this {
    this.linkUrl = url;
    return this;
  }

  public background(url: string): this {
    this.backgroundUrl = url;
    return this;
  }

  public preview(url: string): this {
    this.previewUrl = url;
    return this;
  }

  public collapsible(collapsible: boolean): this {
    this.isCollapsible = collapsible;
    return this;
  }

  public description(text: string): this {
    this.descriptionText = text;
    return this;
  }

  public titleUser(icon: Icon): TitleUser {
    const titleUser = new TitleUser(icon);
    this.userInTitle = titleUser;
    return titleUser;
  }

  public detail(): Detail {
    const detail = new Detail();
    this.details.push(detail);
    return detail;
  }

  public action(): Action {
    const action = new Action();
    this.actions.push(action);
    return action;
  }

  public context(text: string): Context {
    this.cardContext = new Context(text);
    return this.cardContext;
  }

  public toJSON(): Typed {
    const card: Typed = {
      type: 'applicationCard',
      attrs: {
        text: this.text || this.title,
        title: {
          text: this.title
        },
        collapsible: this.isCollapsible
      }
    };
    if (this.linkUrl) {
      card.attrs.textUrl = this.linkUrl;
      card.attrs.link = {
        url: this.linkUrl
      };
    }
    if (this.backgroundUrl) {
      card.attrs.background = {
        url: this.backgroundUrl
      };
    }
    if (this.previewUrl) {
      card.attrs.preview = {
        url: this.previewUrl
      };
    }
    if (this.descriptionText) {
      card.attrs.description = {
        text: this.descriptionText
      };
    }
    if (this.userInTitle) {
      card.attrs.title.user = this.userInTitle.toJSON();
    }
    if (this.details.length > 0) {
      card.attrs.details = this.details.map(detail => detail.toJSON());
    }
    if (this.actions.length > 0) {
      card.attrs.actions = this.actions.map(action => action.toJSON());
    }
    if (this.cardContext) {
      card.attrs.context = this.cardContext.toJSON();
    }
    return card;
  }
}
