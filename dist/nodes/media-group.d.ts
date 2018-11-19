import { ContentNode, TopLevelNode, Typed } from './index';
import { Media, MediaAttributes } from './media';
export declare class MediaGroup extends TopLevelNode {
    content: ContentNode<Media>;
    media(attrs: MediaAttributes): this;
    link(id: string, collection: string): this;
    file(id: string, collection: string): this;
    toJSON(): Typed;
}
