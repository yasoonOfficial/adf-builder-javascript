import { expect, use } from 'chai';
import { Document } from '../../index';
import { adfValidator } from '../../_chai';

describe('Code Block', () => {

  before(async function() {
    this.timeout(5000);
    use(await adfValidator());
  });

  it('should not allow empty code blocks', () => {
    const doc = new Document();
    const block = doc.codeBlock();
    expect(() => block.toJSON()).to.throw();
  });

  it('should create valid code block', () => {
    const doc = new Document();
    const block = doc.codeBlock().text('const i = 0');
    expect(doc).to.be.validADF();
    expect(block.toJSON()).to.deep.equal({
      type: 'codeBlock',
      content: [
        {
          text: 'const i = 0',
          type: 'text'
        }
      ]
    });
  });

  it('should create valid code block with the language attribute set', () => {
    const doc = new Document();
    const block = doc.codeBlock('typescript').text('const i = 0');
    expect(doc).to.be.validADF();
    expect(block.toJSON()).to.deep.equal({
      type: 'codeBlock',
      attrs: {
        language: 'typescript'
      },
      content: [
        {
          text: 'const i = 0',
          type: 'text'
        }
      ]
    });
  });
});
