import { expect, use } from 'chai';
import { Document } from '../../index';
import { adfValidator } from '../../_chai';
import { hardBreak } from '../hard-break';

describe('Hard Break', () => {

  before(async function() {
    this.timeout(5000);
    use(await adfValidator());
  });

  it('should create a valid hard break', () => {
    const doc = new Document();
    const hb = hardBreak();
    doc.paragraph().add(hb);
    expect(doc).to.be.validADF();
    expect(hb.toJSON()).to.deep.equal({
      type: 'hardBreak',
      attrs: {
        text: '\n'
      }
    });
  });

});
