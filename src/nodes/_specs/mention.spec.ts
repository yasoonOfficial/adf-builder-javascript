import { expect } from 'chai';
import { Document } from '../../index';
import { validator, ValidationError, Validator } from '../../_specs/validate';
import { mention, Mention } from '../mention';

describe('Mention', () => {

  let validate: Validator;

  function validateMention(m: Mention) {
    const doc = new Document();
    doc.paragraph().add(m);
    validate(doc);
  }

  before(async function() {
    this.timeout(5000);
    validate = await validator();
  });

  it('should create a valid mention', () => {
    const m = mention('123', 'ps');
    expect(() => validateMention(m)).to.not.throw(ValidationError);
    expect(m.toJSON()).to.deep.equal({
      type: 'mention',
      attrs: {
        id: '123',
        text: 'ps'
      }
    });
  });

});
