import { expect } from 'chai';
import { Document } from '../../index';
import { validator, ValidationError, Validator } from '../../_specs/validate';

describe('Media Group', () => {

  let validate: Validator;

  before(async function() {
    this.timeout(5000);
    validate = await validator();
  });

  it('should not allow empty media groups', () => {
    const doc = new Document();
    const group = doc.mediaGroup();
    expect(() => group.toJSON()).to.throw();
  });

  it('should create valid media group for a file', () => {
    const doc = new Document();
    const group = doc.mediaGroup().file('id', 'coll');
    expect(() => validate(doc)).to.not.throw(ValidationError);
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
    expect(() => validate(doc)).to.not.throw(ValidationError);
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
    expect(() => validate(doc)).to.not.throw(ValidationError);
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
