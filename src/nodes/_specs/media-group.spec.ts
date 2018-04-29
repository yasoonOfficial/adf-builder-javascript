import { expect, use } from 'chai';
import { Document } from '../../index';
import { adfValidator } from '../../_chai';

describe('Media Group', () => {

  before(async function() {
    this.timeout(5000);
    use(await adfValidator());
  });

  it('should not allow empty media groups', () => {
    const doc = new Document();
    const group = doc.mediaGroup();
    expect(() => group.toJSON()).to.throw();
  });

  it('should create valid media group for a file', () => {
    const doc = new Document();
    const group = doc.mediaGroup().file('id', 'coll');
    expect(doc).to.be.validADF();
    expect(group.toJSON()).to.deep.equal({
      type: 'mediaGroup',
      content: [
        {
          type: 'media',
          attrs: {
            collection: 'coll',
            id: 'id',
            type: 'file'
          }
        }
      ]
    });
  });

  it('should create valid media group for a link', () => {
    const doc = new Document();
    const group = doc.mediaGroup().link('id', 'coll');
    expect(doc).to.be.validADF();
    expect(group.toJSON()).to.deep.equal({
      type: 'mediaGroup',
      content: [
        {
          type: 'media',
          attrs: {
            collection: 'coll',
            id: 'id',
            type: 'link'
          }
        }
      ]
    });
  });

  it('should create valid media group with all attributes', () => {
    const doc = new Document();
    const group = doc.mediaGroup().media({
      collection: 'coll',
      id: 'id',
      type: 'link',
      occurrenceKey: 'key'
    });
    expect(doc).to.be.validADF();
    expect(group.toJSON()).to.deep.equal({
      type: 'mediaGroup',
      content: [
        {
          type: 'media',
          attrs: {
            collection: 'coll',
            id: 'id',
            type: 'link',
            occurrenceKey: 'key'
          }
        }
      ]
    });
  });

});
