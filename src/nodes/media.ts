import { Typed } from './index';

export interface MediaAttributes {
  id: string;
  type: 'link' | 'file';
  collection: string;
  occurrenceKey?: string;
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
    return media;
  }
}
