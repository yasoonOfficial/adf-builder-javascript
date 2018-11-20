import { TopLevelNode, Typed, ContentNode } from './index';
import { Media, MediaAttributes } from './media';

export type MediaSingleLayout = 'wrap-right' | 'center' | 'wrap-left' | 'wide' | 'full-width';
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

export class MediaSingle extends TopLevelNode {
  //private layout: MediaSingleLayout;
  public content = new ContentNode<Media>('mediaGroup');

  constructor(layout?: MediaSingleLayout) {
    super();
    //this.layout = layout || 'wrap-right';
  }

  file(attr: MediaAttributes) {
    this.content.add(new Media(attr));
    return this;
  }

  external(attr: MediaSingleExternalAttributes) {
    this.content.add(new Media(attr));
    return this;
  }

  public toJSON(): Typed {
    return this.content.toJSON();
  }
}
