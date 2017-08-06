import { expect } from 'chai';
import { Document } from '../../index';
import { validator, ValidationError, Validator } from '../../_specs/validate';
import { Heading } from '../heading';

describe('Heading', () => {

  let validate: Validator;

  before(async function() {
    this.timeout(5000);
    validate = await validator();
  });

  it('should not allow empty headings', () => {
    const head = new Heading(1);
    expect(() => head.toJSON()).to.throw();
  });

  it('should not allow headings smaller than 1', () => {
    expect(() => new Heading(0)).to.throw();
  });

  it('should not allow headings greater than 6', () => {
    expect(() => new Heading(7)).to.throw();
  });

  it('should allow headings from 1-6', () => {
    expect(() => [1, 2, 3, 4, 5, 6].map(i => new Heading(i))).to.not.throw();
  });

  it('should create a valid heading with text', () => {
    const doc = new Document();
    const head = doc.heading(1).link('Title', 'https://example.com');
    expect(head.toJSON()).to.deep.equal({
      type: 'heading',
      attrs: {
        level: 1
      },
      content: [
        {
          type: 'text',
          text: 'Title',
          marks: [
            {
              type: 'link',
              attrs: {
                href: 'https://example.com'
              }
            }
          ]
        }
      ]
    });
    expect(() => validate(doc)).to.not.throw(ValidationError);
  });

});
