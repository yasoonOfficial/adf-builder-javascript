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
    return {
      type: 'media',
      attrs: {
        id: this.attrs.id,
        type: this.attrs.type,
        collection: this.attrs.collection,
        occurrenceKey: this.attrs.occurrenceKey
      }
    };
  }
}
