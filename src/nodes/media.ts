import { Typed } from './index';

export interface MediaAttributes {
  id: string;
  type: 'link' | 'file';
  url?: string;
  collection: string;
  occurrenceKey?: string;
  width?: number;
  height?: number;
}

export class Media {

  constructor(
    private readonly attrs: MediaAttributes) {
  }

  public toJSON(): Typed {
    const media: Typed = {
      type: 'media',
      attrs: {
        id: this.attrs.id,
        type: this.attrs.type,
        collection: this.attrs.collection
      }
    };
    if (this.attrs.occurrenceKey) {
      media.attrs.occurrenceKey = this.attrs.occurrenceKey;
    }

    if (this.attrs.url) {
      media.attrs.url = this.attrs.url;
    }

    if (this.attrs.width) {
      media.attrs.width = this.attrs.width;
    }

    if (this.attrs.height) {
      media.attrs.height = this.attrs.height;
    }
    return media;
  }
}
