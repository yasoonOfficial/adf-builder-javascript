import { expect } from 'chai';
import { Document } from '../../index';
import { validator, ValidationError, Validator } from '../../_specs/validate';

describe('Decision List', () => {

  let validate: Validator;

  before(async function() {
    this.timeout(5000);
    validate = await validator();
  });

  it('should not allow empty decision lists', () => {
    const doc = new Document();
    const list = doc.decisionList('1');
    expect(() => list.toJSON()).to.throw();
  });

  it('should create valid decision list with one item', () => {
    const doc = new Document();
    const list = doc.decisionList('1');
    list.decision('2', 'done').text('DACI');
    expect(() => validate(doc)).to.not.throw(ValidationError);
    expect(list.toJSON()).to.deep.equal({
      type: 'decisionList',
      attrs: {
        localId: '1'
      },
      content: [
        {
          type: 'decisionItem',
          attrs: {
            localId: '2',
            state: 'done'
          },
          content: [
            {
              text: 'DACI',
              type: 'text'
            }
          ]
        }
      ]
    });
  });

  it('should create valid decision list with multiple items', () => {
    const doc = new Document();
    const list = doc.decisionList('1');
    list.decision('2', 'done').text('DACI 2');
    list.decision('3', 'open').text('DACI 3');
    expect(() => validate(doc)).to.not.throw(ValidationError);
    expect(list.toJSON()).to.deep.equal({
      type: 'decisionList',
      attrs: {
        localId: '1'
      },
      content: [
        {
          type: 'decisionItem',
          attrs: {
            localId: '2',
            state: 'done'
          },
          content: [
            {
              text: 'DACI 2',
              type: 'text'
            }
          ]
        },
        {
          type: 'decisionItem',
          attrs: {
            localId: '3',
            state: 'open'
          },
          content: [
            {
              text: 'DACI 3',
              type: 'text'
            }
          ]
        }
      ]
    });
  });

});
