import { expect, use } from 'chai';
import { Document } from '../../index';
import { marks } from '../../marks';
import { adfValidator } from '../../_chai';
import { code, em, link, plain, strike, strong, Text } from '../text';

describe('Text', () => {

  function docFromText(text: Text) {
    const doc = new Document();
    doc.paragraph().add(text);
    return doc;
  }

  before(async function() {
    this.timeout(5000);
    use(await adfValidator());
  });

  it('should contain at least one character', () => {
    expect(() => new Text('')).to.throw();
  });

  it('should create valid text node', () => {
    const text = new Text('some text');
    expect(docFromText(text)).to.be.validADF();
    expect(text.toJSON()).to.deep.equal({
      type: 'text',
      text: 'some text'
    });
  });

  it('should reject empty marks', () => {
    const text = new Text('some text', marks());
    expect(() => text.toJSON()).to.throw();
  });

  it('should support a single mark', () => {
    const text = new Text('some text', marks().strong());
    expect(docFromText(text)).to.be.validADF();
    expect(text.toJSON()).to.deep.equal({
      type: 'text',
      text: 'some text',
      marks: [
        { type: 'strong' }
      ]
    });
  });

  it('should support multiple marks', () => {
    const text = new Text('some text', marks().strong().em().underline());
    expect(docFromText(text)).to.be.validADF();
    expect(text.toJSON()).to.deep.equal({
      type: 'text',
      text: 'some text',
      marks: [
        { type: 'strong' },
        { type: 'em' },
        { type: 'underline' },
      ]
    });
  });

  describe('plain', () => {
    it('should create a plain text node', () => {
      const text = plain('some text');
      expect(docFromText(text)).to.be.validADF();
      expect(text.toJSON()).to.deep.equal({
        type: 'text',
        text: 'some text'
      });
    });
  });

  describe('strike', () => {
    it('should create a text node with a strike mark', () => {
      const text = strike('some text');
      expect(docFromText(text)).to.be.validADF();
      expect(text.toJSON()).to.deep.equal({
        type: 'text',
        text: 'some text',
        marks: [
          { type: 'strike' }
        ]
      });
    });
  });

  describe('strong', () => {
    it('should create a text node with a strong mark', () => {
      const text = strong('some text');
      expect(docFromText(text)).to.be.validADF();
      expect(text.toJSON()).to.deep.equal({
        type: 'text',
        text: 'some text',
        marks: [
          { type: 'strong' }
        ]
      });
    });
  });

  describe('em', () => {
    it('should create a text node with a em mark', () => {
      const text = em('some text');
      expect(docFromText(text)).to.be.validADF();
      expect(text.toJSON()).to.deep.equal({
        type: 'text',
        text: 'some text',
        marks: [
          { type: 'em' }
        ]
      });
    });
  });

  describe('link', () => {
    it('should create a text node with a link mark', () => {
      const text = link('some text', 'https://example.com');
      expect(docFromText(text)).to.be.validADF();
      expect(text.toJSON()).to.deep.equal({
        type: 'text',
        text: 'some text',
        marks: [
          {
            type: 'link',
            attrs: {
              href: 'https://example.com'
            }
          }
        ]
      });
    });
  });

  describe('code', () => {
    it('should create a text node with a code mark', () => {
      const text = code('some text');
      expect(docFromText(text)).to.be.validADF();
      expect(text.toJSON()).to.deep.equal({
        type: 'text',
        text: 'some text',
        marks: [
          { type: 'code' }
        ]
      });
    });
  });
});
