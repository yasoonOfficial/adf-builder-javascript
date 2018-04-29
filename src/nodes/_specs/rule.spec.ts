import { expect, use } from 'chai';
import { Document } from '../../index';
import { adfValidator } from '../../_chai';

describe('Rule', () => {

  before(async function() {
    this.timeout(5000);
    use(await adfValidator());
  });

  it('should create valid rule', () => {
    const doc = new Document();
    doc.rule();
    expect(doc).to.be.validADF();
    expect(doc.toJSON()).to.deep.equal({
      type: 'doc',
      version: 1,
      content: [
        {
          type: 'rule'
        }
      ]
    });
  });

});
