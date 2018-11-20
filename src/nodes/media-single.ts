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

export class MediaSingle extends TopLevelNode {

  private attrs: MediaSingleAttributes;

  constructor(params: MediaSingleAttributes) {
    super();
    this.attrs = params;
  }

  public toJSON(): Typed {
    return {
      type: 'mediaSingle',
      attrs: {
        layout: this.attrs.layout || 'wrap-right'
      },
      content: [{
        type: 'media',
        attrs: {
          height: this.attrs.height,
          width: this.attrs.width,
          type: this.attrs.type,
          id: this.attrs.id,
          collection: this.attrs.collection,
          occurrenceKey: this.attrs.occurrenceKey
        }
      }]
    };
  }
}
