import { expect } from 'chai';
import { Document } from '../../index';
import { validator, ValidationError, Validator } from '../../_specs/validate';
import { hardBreak } from '../hard-break';

describe('Hard Break', () => {

  let validate: Validator;

  before(async function() {
    this.timeout(5000);
    validate = await validator();
  });

  it('should create a valid hard break', () => {
    const doc = new Document();
    const hb = hardBreak();
    doc.paragraph().add(hb);
    expect(() => validate(doc)).to.not.throw(ValidationError);
    expect(hb.toJSON()).to.deep.equal({
      type: 'hardBreak',
      attrs: {
        text: '\n'
      }
    });
  });

});
