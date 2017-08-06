import { expect } from 'chai';
import { Document } from '../../index';
import { validator, ValidationError, Validator } from '../../_specs/validate';

describe('Code Block', () => {

  let validate: Validator;

  before(async function() {
    this.timeout(5000);
    validate = await validator();
  });

  it('should not allow empty code blocks', () => {
    const doc = new Document();
    const block = doc.codeBlock();
    expect(() => block.toJSON()).to.throw();
  });

  it('should create valid code block', () => {
    const doc = new Document();
    const block = doc.codeBlock().text('const i = 0');
    expect(() => validate(doc)).to.not.throw(ValidationError);
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
    expect(() => validate(doc)).to.not.throw(ValidationError);
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
