import { expect, use } from 'chai';
import { Document } from '../../index';
import { adfValidator } from '../../_chai';

describe('Block Quote', () => {

  before(async function() {
    this.timeout(5000);
    use(await adfValidator());
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
    expect(doc).to.be.validADF();
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
