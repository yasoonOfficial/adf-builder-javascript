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
export declare class Action {
    private actionTitle?;
    private actionTarget?;
    private actionParameters?;
    title(title: string): this;
    target(target: ActionTarget): this;
    parameters(parameters: object): this;
    toJSON(): any;
}
export declare class Detail {
    private detailTitle?;
    private detailText?;
    private detailLozenge?;
    private detailIcon?;
    private detailBadge?;
    private detailUsers;
    title(text: string): this;
    text(text: string): this;
    lozenge(lozenge: DetailLozenge): this;
    icon(icon: Icon): this;
    badge(badge: DetailBadge): this;
    user(user: DetailUser): this;
    toJSON(): any;
}
export declare class Context {
    private text;
    private contextIcon?;
    constructor(text: string);
    icon(icon: Icon): this;
    toJSON(): Partial<Typed>;
}
export declare class TitleUser {
    private titleUserIcon;
    private titleUserId?;
    constructor(titleUserIcon: Icon);
    id(id: string): this;
    toJSON(): any;
}
export declare class ApplicationCard extends TopLevelNode {
    private readonly title;
    private readonly text;
    private linkUrl?;
    private backgroundUrl?;
    private previewUrl?;
    private isCollapsible;
    private descriptionText?;
    private userInTitle?;
    private details;
    private actions;
    private cardContext?;
    constructor(title: string, text?: string | undefined);
    link(url: string): this;
    background(url: string): this;
    preview(url: string): this;
    collapsible(collapsible: boolean): this;
    description(text: string): this;
    titleUser(icon: Icon): TitleUser;
    detail(): Detail;
    action(): Action;
    context(text: string): Context;
    toJSON(): Typed;
}
