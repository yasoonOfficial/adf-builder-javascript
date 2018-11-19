import { InlineNode, Typed } from './index';
export declare function emoji(shortName: string, id?: string, text?: string): Emoji;
export interface EmojiAttributes {
    shortName: string;
    id?: string;
    text?: string;
}
export declare class Emoji extends InlineNode {
    private readonly attrs;
    constructor(attrs: EmojiAttributes);
    toJSON(): Typed;
}
