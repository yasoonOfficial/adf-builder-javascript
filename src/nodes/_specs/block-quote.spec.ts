import { expect } from 'chai';
import { Document } from '../../index';
import { validator, ValidationError, Validator } from '../../_specs/validate';

describe('Block Quote', () => {

  let validate: Validator;

  before(async function() {
    this.timeout(5000);
    validate = await validator();
  });

  it('should not allow empty block quotes', () => {
    const doc = new Document();
    const quote = doc.blockQuote();
    expect(() => quote.toJSON()).to.throw();
  });

  it('should create valid block quote', () => {
    const doc = new Document();
    const quote = doc.blockQuote();
    quote.paragraph().text('quoted');
    expect(() => validate(doc)).to.not.throw(ValidationError);
    expect(quote.toJSON()).to.deep.equal({
      type: 'blockquote',
      content: [
        {
          content: [
            {
              text: 'quoted',
              type: 'text'
            }
          ],
          type: 'paragraph'
        }
      ]
    });
  });
});
