import { expect, use } from 'chai';
import { Document } from '../index';
import { adfValidator } from '../_chai';

describe('Document', () => {

  before(async function() {
    this.timeout(5000);
    use(await adfValidator());
  });

  it('should be invalid without content', () => {
    const doc = new Document();
    expect(() => doc.toJSON()).to.throw();
  });

  it('should be valid with an applicationCard', () => {
    const doc = new Document();
    doc.applicationCard('title');
    expect(doc).to.be.validADF();
  });

  it('should be invalid with an empty block quote', () => {
    const doc = new Document();
    doc.blockQuote();
    expect(() => doc.toJSON()).to.throw();
  });

  it('should be invalid with an empty bulletList', () => {
    const doc = new Document();
    doc.bulletList();
    expect(() => doc.toJSON()).to.throw();
  });

  it('should be invalid with an empty codeBlock', () => {
    const doc = new Document();
    doc.codeBlock();
    expect(() => doc.toJSON()).to.throw();
  });

  it('should be invalid with an empty decisionList', () => {
    const doc = new Document();
    doc.decisionList('1');
    expect(() => doc.toJSON()).to.throw();
  });

  it('should be invalid with an empty heading', () => {
    const doc = new Document();
    doc.heading(1);
    expect(() => doc.toJSON()).to.throw();
  });

  it('should be valid with an text heading', () => {
    const doc = new Document();
    doc.textHeading(1, 'Heading');
    expect(doc).to.be.validADF();
  });

  it('should be invalid with an empty mediaGroup', () => {
    const doc = new Document();
    doc.mediaGroup();
    expect(() => doc.toJSON()).to.throw();
  });

  it('should be invalid with an empty orderedList', () => {
    const doc = new Document();
    doc.orderedList();
    expect(() => doc.toJSON()).to.throw();
  });

  it('should be invalid with an empty panel', () => {
    const doc = new Document();
    doc.panel('info');
    expect(() => doc.toJSON()).to.throw();
  });

  it('should be invalid with an empty paragraph', () => {
    const doc = new Document();
    doc.paragraph();
    expect(() => doc.toJSON()).to.throw();
  });

  it('should be valid with a rule', () => {
    const doc = new Document();
    doc.rule();
    expect(doc).to.be.validADF();
  });

  it('should serialize to JSON with toString()', () => {
    const doc = new Document();
    doc.paragraph().text('hello');
    // tslint:disable-next-line:max-line-length
    expect(doc.toString()).to.equal('{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"hello"}]}],"version":1}');
  });

  it('should serialize to JSON with JSON.stringify', () => {
    const doc = new Document();
    doc.paragraph().text('hello');
    // tslint:disable-next-line:max-line-length
    expect(JSON.stringify(doc)).to.equal('{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"hello"}]}],"version":1}');
  });

  it('should be valid with a single row, single column table', () => {
    const doc = new Document();
    const t = doc.table();
    t.row().cell().paragraph().text(' ');
    expect(doc).to.be.validADF();
  });
});
