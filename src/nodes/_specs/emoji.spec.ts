import { expect } from 'chai';
import { Document } from '../../index';
import { validator, ValidationError, Validator } from '../../_specs/validate';
import { emoji, Emoji } from '../emoji';

describe('Emoji', () => {

  let validate: Validator;

  function validateEmoji(emo: Emoji) {
    const doc = new Document();
    doc.paragraph().add(emo);
    validate(doc);
  }

  before(async function() {
    this.timeout(5000);
    validate = await validator();
  });

  it('should create a valid emoji with shortName', () => {
    const emo = emoji('smile');
    expect(() => validateEmoji(emo)).to.not.throw(ValidationError);
    expect(emo.toJSON()).to.deep.equal({
      type: 'emoji',
      attrs: {
        shortName: 'smile'
      }
    });
  });

  it('should create a valid emoji with shortName and id', () => {
    const emo = emoji('smile', '123');
    expect(() => validateEmoji(emo)).to.not.throw(ValidationError);
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
    expect(() => validateEmoji(emo)).to.not.throw(ValidationError);
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
