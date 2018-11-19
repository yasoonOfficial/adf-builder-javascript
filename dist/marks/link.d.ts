import { Mark } from './mark';
export declare class Link extends Mark {
    private readonly href;
    private readonly title;
    constructor(href: string, title?: string | undefined);
    toJSON(): any;
}
