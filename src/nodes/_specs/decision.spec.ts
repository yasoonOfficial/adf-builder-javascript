import { expect, use } from 'chai';
import { Document } from '../../index';
import { adfValidator } from '../../_chai';

describe('Decision', () => {

  before(async function() {
    this.timeout(5000);
    use(await adfValidator());
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
    expect(doc).to.be.validADF();
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
    expect(doc).to.be.validADF();
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
    expect(doc).to.be.validADF();
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
    expect(doc).to.be.validADF();
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
    expect(doc).to.be.validADF();
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
    expect(doc).to.be.validADF();
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
    expect(doc).to.be.validADF();
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
    expect(doc).to.be.validADF();
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
    expect(doc).to.be.validADF();
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
