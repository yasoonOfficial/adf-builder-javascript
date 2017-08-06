import { expect } from 'chai';
import { Document } from '../index';
import { validator, ValidationError, Validator } from './validate';

describe('Document', () => {

  let validate: Validator;

  before(async function() {
    this.timeout(5000);
    validate = await validator();
  });

  it('should be invalid without content', () => {
    const doc = new Document();
    expect(() => doc.toJSON()).to.throw();
  });

  it('should be valid with an applicationCard', () => {
    const doc = new Document();
    doc.applicationCard('title');
    expect(() => validate(doc)).to.not.throw(ValidationError);
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
    expect(() => validate(doc)).to.not.throw(ValidationError);
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

});
