import { expect, use } from 'chai';
import { Document } from '../../index';
import { adfValidator } from '../../_chai';

describe('Table', () => {

  before(async function() {
    this.timeout(5000);
    use(await adfValidator());
  });

  it('should not allow empty tables', () => {
    const doc = new Document();
    const t = doc.table();
    expect(() => t.toJSON().to.throw());
  });

  it('should not allow null nodes', () => {
    const doc = new Document();
    const t = doc.table();
    expect(() => t.add(null as any)).to.throw();
  });

  it('should create a row node in the table', () => {
    const doc = new Document();
    const t = doc.table();
    t.row().cell().paragraph().text('123');
    expect(t.toJSON()).to.deep.equal({
      type: 'table',
      content: [
        {
          type: 'tableRow',
          content: [
            {
              type: 'tableCell',
              attrs: {
                background: undefined
              },
              content: [
                {
                  type: 'paragraph',
                  content: [
                    {
                      type: 'text',
                      text: '123'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    });
  });

});
