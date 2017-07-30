import { TopLevelNode, Typed } from './index';

export interface DetailLozenge {
  text: string;
  bold?: boolean;
  appearance?: 'default' | 'removed' | 'success' | 'inprogress' | 'new' | 'moved';
}

export interface DetailIcon {
  url: string;
  label: string;
}

export interface DetailBadge {
  value: number;
  max?: number;
  appearance?: 'default' | 'primary' | 'important' | 'added' | 'removed';
}

export interface DetailUser {
  id?: string;
  icon: DetailIcon;
}

export class Detail {

  private detailTitle: string;
  private detailText: string;
  private detailLozenge: DetailLozenge;
  private detailIcon: DetailIcon;
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

  public icon(icon: DetailIcon): this {
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
    const detail: any = {
      title: this.detailTitle,
      text: this.detailText,
      icon: this.detailIcon,
      badge: this.detailBadge,
      lozenge: this.detailLozenge
    };
    if (this.detailUsers.length > 0) {
      detail.users = this.detailUsers;
    }
    return detail;
  }
}

export class ApplicationCard extends TopLevelNode {

  private linkUrl: string;
  private backgroundUrl: string;
  private previewUrl: string;
  private isCollapsible: boolean = false;
  private descriptionText: string;

  private details: Detail[] = [];

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

  public detail(): Detail {
    const detail = new Detail();
    this.details.push(detail);
    return detail;
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
    if (this.details.length > 0) {
      card.attrs.details = this.details.map(detail => detail.toJSON());
    }
    return card;
  }
}
