import { expect, use } from 'chai';
import { Document } from '../../index';
import { adfValidator } from '../../_chai';
import { mention, Mention } from '../mention';

describe('Mention', () => {

  function docFromMention(m: Mention) {
    const doc = new Document();
    doc.paragraph().add(m);
    return doc;
  }

  before(async function() {
    this.timeout(5000);
    use(await adfValidator());
  });

  it('should create a valid mention', () => {
    const m = mention('123', 'ps');
    expect(docFromMention(m)).to.be.validADF();
    expect(m.toJSON()).to.deep.equal({
      type: 'mention',
      attrs: {
        id: '123',
        text: 'ps'
      }
    });
  });

});
