import { ContentNode, TopLevelNode, Typed } from './index';
import { Media, MediaAttributes } from './media';

export class MediaGroup extends TopLevelNode {

  public content = new ContentNode<Media>('mediaGroup');

  public media(attrs: MediaAttributes): this {
    this.content.add(new Media(attrs));
    return this;
  }

  public link(id: string, collection: string): this {
    this.content.add(new Media({ id, collection, type: 'link' }));
    return this;
  }

  public file(id: string, collection: string): this {
    this.content.add(new Media({ id, collection, type: 'file' }));
    return this;
  }

  public toJSON(): Typed {
    return this.content.toJSON();
  }
}
