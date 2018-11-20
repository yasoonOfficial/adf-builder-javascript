import { TopLevelNode, Typed, ContentNode } from './index';
import { Media, MediaAttributes } from './media';
export declare type MediaSingleLayout = 'wrap-right' | 'center' | 'wrap-left' | 'wide' | 'full-width';
export interface MediaSingleAttributes {
    id: string;
    type: 'link' | 'file' | 'external';
    collection: string;
    occurrenceKey?: string;
    width?: number;
    height?: number;
    layout?: MediaSingleLayout;
}
export interface MediaSingleExternalAttributes extends MediaSingleAttributes {
    type: 'link';
    url: string;
}
export declare class MediaSingle extends TopLevelNode {
    content: ContentNode<Media>;
    constructor(layout?: MediaSingleLayout);
    file(attr: MediaAttributes): this;
    external(attr: MediaSingleExternalAttributes): this;
    toJSON(): Typed;
}
