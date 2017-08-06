import { expect } from 'chai';
import { Document } from '../../index';
import { validator, ValidationError, Validator } from '../../_specs/validate';

describe('Rule', () => {

  let validate: Validator;

  before(async function() {
    this.timeout(5000);
    validate = await validator();
  });

  it('should create valid rule', () => {
    const doc = new Document();
    doc.rule();
    expect(() => validate(doc)).to.not.throw(ValidationError);
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
