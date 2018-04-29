import { expect, use } from 'chai';
import { Document } from '../../index';
import { adfValidator } from '../../_chai';

describe('Paragraph', () => {

  before(async function() {
    this.timeout(5000);
    use(await adfValidator());
  });

  it('should not allow empty paragraphs', () => {
    const doc = new Document();
    const p = doc.paragraph();
    expect(() => p.toJSON()).to.throw();
  });

  it('should not allow null nodes', () => {
    const doc = new Document();
    const p = doc.paragraph();
    expect(() => p.add(null as any)).to.throw();
  });

  it('should create a text node in the paragraph', () => {
    const doc = new Document();
    const p = doc.paragraph().text('a');
    expect(doc).to.be.validADF();
    expect(p.toJSON()).to.deep.equal({
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'a'
        }
      ]
    });
  });

  it('should create a code node in the paragraph', () => {
    const doc = new Document();
    const p = doc.paragraph().code('a');
    expect(doc).to.be.validADF();
    expect(p.toJSON()).to.deep.equal({
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'a',
          marks: [
            { type: 'code' }
          ]
        }
      ]
    });
  });

  it('should create a em node in the paragraph', () => {
    const doc = new Document();
    const p = doc.paragraph().em('a');
    expect(doc).to.be.validADF();
    expect(p.toJSON()).to.deep.equal({
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'a',
          marks: [
            { type: 'em' }
          ]
        }
      ]
    });
  });

  it('should create a strong node in the paragraph', () => {
    const doc = new Document();
    const p = doc.paragraph().strong('a');
    expect(doc).to.be.validADF();
    expect(p.toJSON()).to.deep.equal({
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'a',
          marks: [
            { type: 'strong' }
          ]
        }
      ]
    });
  });

  it('should create an emoji node in the paragraph', () => {
    const doc = new Document();
    const p = doc.paragraph().emoji('a');
    expect(doc).to.be.validADF();
    expect(p.toJSON()).to.deep.equal({
      type: 'paragraph',
      content: [
        {
          type: 'emoji',
          attrs: {
            shortName: 'a'
          }
        }
      ]
    });
  });

  it('should create a hardBreak node in the paragraph', () => {
    const doc = new Document();
    const p = doc.paragraph().hardBreak();
    expect(doc).to.be.validADF();
    expect(p.toJSON()).to.deep.equal({
      type: 'paragraph',
      content: [
        {
          type: 'hardBreak',
          attrs: {
            text: '\n'
          }
        }
      ]
    });
  });

  it('should create a link node in the paragraph', () => {
    const doc = new Document();
    const p = doc.paragraph().link('a', 'https://example.com/a');
    expect(doc).to.be.validADF();
    expect(p.toJSON()).to.deep.equal({
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'a',
          marks: [
            {
              type: 'link',
              attrs: { href: 'https://example.com/a'}
            }
          ]
        }
      ]
    });
  });

  it('should create a mention node in the paragraph', () => {
    const doc = new Document();
    const p = doc.paragraph().mention('123', 'a');
    expect(doc).to.be.validADF();
    expect(p.toJSON()).to.deep.equal({
      type: 'paragraph',
      content: [
        {
          type: 'mention',
          attrs: {
            id: '123',
            text: 'a'
          }
        }
      ]
    });
  });

});
