import { expect, use } from 'chai';
import { Document } from '../../index';
import { adfValidator } from '../../_chai';
import { Heading } from '../heading';

describe('Heading', () => {

  before(async function() {
    this.timeout(5000);
    use(await adfValidator());
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
    const head = doc.heading(1).text('Title');
    expect(doc).to.be.validADF();
    expect(head.toJSON()).to.deep.equal({
      type: 'heading',
      attrs: {
        level: 1
      },
      content: [
        {
          type: 'text',
          text: 'Title'
        }
      ]
    });
  });

  it('should create a valid heading with a link', () => {
    const doc = new Document();
    const head = doc.heading(1).link('Title', 'https://example.com');
    expect(doc).to.be.validADF();
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
  });

});
