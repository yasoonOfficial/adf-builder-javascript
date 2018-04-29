import { expect, use } from 'chai';
import { Document } from '../../index';
import { adfValidator } from '../../_chai';
import { emoji, Emoji } from '../emoji';

describe('Emoji', () => {

  function docFromEmoji(emo: Emoji) {
    const doc = new Document();
    doc.paragraph().add(emo);
    return doc;
  }

  before(async function() {
    this.timeout(5000);
    use(await adfValidator());
  });

  it('should create a valid emoji with shortName', () => {
    const emo = emoji('smile');
    expect(docFromEmoji(emo)).to.be.validADF();
    expect(emo.toJSON()).to.deep.equal({
      type: 'emoji',
      attrs: {
        shortName: 'smile'
      }
    });
  });

  it('should create a valid emoji with shortName and id', () => {
    const emo = emoji('smile', '123');
    expect(docFromEmoji(emo)).to.be.validADF();
    expect(emo.toJSON()).to.deep.equal({
      type: 'emoji',
      attrs: {
        shortName: 'smile',
        id: '123'
      }
    });
  });

  it('should create a valid emoji with shortName, id and text', () => {
    const emo = emoji('smile', '123', ':)');
    expect(docFromEmoji(emo)).to.be.validADF();
    expect(emo.toJSON()).to.deep.equal({
      type: 'emoji',
      attrs: {
        shortName: 'smile',
        id: '123',
        text: ':)'
      }
    });
  });

});
