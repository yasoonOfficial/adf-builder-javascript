import { TopLevelNode, Typed } from './index';
export interface MediaSingleAttributes {
    id: string;
    type: 'link' | 'file' | 'external';
    collection: string;
    occurrenceKey?: string;
    width?: number;
    height?: number;
    layout?: 'wrap-right' | 'center' | 'wrap-left' | 'wide' | 'full-width';
}
export declare class MediaSingle extends TopLevelNode {
    private attrs;
    constructor(params: MediaSingleAttributes);
    toJSON(): Typed;
}
