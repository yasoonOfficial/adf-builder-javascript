import { expect } from 'chai';
import { Document } from '../../index';
import { validator, ValidationError, Validator } from '../../_specs/validate';

describe('Decision', () => {

  let validate: Validator;

  before(async function() {
    this.timeout(5000);
    validate = await validator();
  });

  it('should not allow decision list items without content', () => {
    const doc = new Document();
    const decision = doc.decisionList('1').decision('1', 'done');
    expect(() => decision.toJSON()).to.throw();
  });

  it('should create a text node in the decision', () => {
    const doc = new Document();
    const decision = doc.decisionList('1')
      .decision('1', 'done')
      .text('a');
    expect(() => validate(doc)).to.not.throw(ValidationError);
    expect(decision.toJSON()).to.deep.equal({
      type: 'decisionItem',
      attrs: {
        localId: '1',
        state: 'done'
      },
      content: [
        {
          type: 'text',
          text: 'a'
        }
      ]
    });
  });

  it('should create a code node in the decision', () => {
    const doc = new Document();
    const decision = doc.decisionList('1')
      .decision('1', 'done')
      .code('a');
    expect(() => validate(doc)).to.not.throw(ValidationError);
    expect(decision.toJSON()).to.deep.equal({
      type: 'decisionItem',
      attrs: {
        localId: '1',
        state: 'done'
      },
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

  it('should create a em node in the decision', () => {
    const doc = new Document();
    const decision = doc.decisionList('1')
      .decision('1', 'done')
      .em('a');
    expect(() => validate(doc)).to.not.throw(ValidationError);
    expect(decision.toJSON()).to.deep.equal({
      type: 'decisionItem',
      attrs: {
        localId: '1',
        state: 'done'
      },
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

  it('should create a strike node in the decision', () => {
    const doc = new Document();
    const decision = doc.decisionList('1')
      .decision('1', 'done')
      .strike('a');
    expect(() => validate(doc)).to.not.throw(ValidationError);
    expect(decision.toJSON()).to.deep.equal({
      type: 'decisionItem',
      attrs: {
        localId: '1',
        state: 'done'
      },
      content: [
        {
          type: 'text',
          text: 'a',
          marks: [
            { type: 'strike' }
          ]
        }
      ]
    });
  });

  it('should create a strong node in the decision', () => {
    const doc = new Document();
    const decision = doc.decisionList('1')
      .decision('1', 'done')
      .strong('a');
    expect(() => validate(doc)).to.not.throw(ValidationError);
    expect(decision.toJSON()).to.deep.equal({
      type: 'decisionItem',
      attrs: {
        localId: '1',
        state: 'done'
      },
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

  it('should create an emoji node in the decision', () => {
    const doc = new Document();
    const decision = doc.decisionList('1')
      .decision('1', 'done')
      .emoji('a');
    expect(() => validate(doc)).to.not.throw(ValidationError);
    expect(decision.toJSON()).to.deep.equal({
      type: 'decisionItem',
      attrs: {
        localId: '1',
        state: 'done'
      },
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

  it('should create a hardBreak node in the decision', () => {
    const doc = new Document();
    const decision = doc.decisionList('1')
      .decision('1', 'done')
      .hardBreak();
    expect(() => validate(doc)).to.not.throw(ValidationError);
    expect(decision.toJSON()).to.deep.equal({
      type: 'decisionItem',
      attrs: {
        localId: '1',
        state: 'done'
      },
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

  it('should create a link node in the decision', () => {
    const doc = new Document();
    const decision = doc.decisionList('1')
      .decision('1', 'done')
      .link('a', 'https://example.com/a');
    expect(() => validate(doc)).to.not.throw(ValidationError);
    expect(decision.toJSON()).to.deep.equal({
      type: 'decisionItem',
      attrs: {
        localId: '1',
        state: 'done'
      },
      content: [
        {
          type: 'text',
          text: 'a',
          marks: [
            {
              type: 'link',
              attrs: { href: 'https://example.com/a' }
            }
          ]
        }
      ]
    });
  });

  it('should create a mention node in the decision', () => {
    const doc = new Document();
    const decision = doc.decisionList('1')
      .decision('1', 'done')
      .mention('123', 'a');
    expect(() => validate(doc)).to.not.throw(ValidationError);
    expect(decision.toJSON()).to.deep.equal({
      type: 'decisionItem',
      attrs: {
        localId: '1',
        state: 'done'
      },
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
