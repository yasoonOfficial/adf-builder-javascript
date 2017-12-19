import { expect } from 'chai';
import { marks, Marks } from '../';
import { Document } from '../../index';
import { validator, ValidationError, Validator } from '../../_specs/validate';

describe('Marks', () => {

  let validate: Validator;

  function validateMark(mark: Marks) {
    const doc = new Document();
    doc.paragraph().text('any', mark);
    validate(doc);
  }

  before(async function() {
    this.timeout(5000);
    validate = await validator();
  });

  it('should reject empty marks', () => {
    expect(() => marks().toJSON()).to.throw();
  });

  it('should reject duplicate marks', () => {
    expect(() => marks().strong().strong()).to.throw();
  });

  describe('code', () => {
    it('should create a valid code mark', () => {
      const m = marks().code();
      expect(() => validateMark(m)).to.not.throw(ValidationError);
      expect(m.toJSON()).to.deep.equal([{
        type: 'code'
      }]);
    });
  });

  describe('em', () => {
    it('should create a valid em mark', () => {
      const m = marks().em();
      expect(() => validateMark(m)).to.not.throw(ValidationError);
      expect(m.toJSON()).to.deep.equal([{
        type: 'em'
      }]);
    });
  });

  describe('link', () => {

    it('should create a valid link mark', () => {
      const m = marks().link('https://example.com');
      expect(() => validateMark(m)).to.not.throw(ValidationError);
      expect(m.toJSON()).to.deep.equal([{
        type: 'link',
        attrs: {
          href: 'https://example.com'
        }
      }]);
    });

    it('should support an optional title', () => {
      const m = marks().link('https://example.com', 'Title');
      expect(() => validateMark(m)).to.not.throw(ValidationError);
      expect(m.toJSON()).to.deep.equal([{
        type: 'link',
        attrs: {
          href: 'https://example.com',
          title: 'Title'
        }
      }]);
    });
  });

  describe('strong', () => {
    it('should create a valid strong mark', () => {
      const m = marks().strong();
      expect(() => validateMark(m)).to.not.throw(ValidationError);
      expect(m.toJSON()).to.deep.equal([{
        type: 'strong'
      }]);
    });
  });

  describe('subsup', () => {

    it('should create a valid sub mark', () => {
      const m = marks().sub();
      expect(() => validateMark(m)).to.not.throw(ValidationError);
      expect(m.toJSON()).to.deep.equal([{
        type: 'subsup',
        attrs: {
          type: 'sub'
        }
      }]);
    });

    it('should create a valid sup mark', () => {
      const m = marks().sup();
      expect(() => validateMark(m)).to.not.throw(ValidationError);
      expect(m.toJSON()).to.deep.equal([{
        type: 'subsup',
        attrs: {
          type: 'sup'
        }
      }]);
    });

  });

  describe('textColor', () => {

    it('should create a valid color mark', () => {
      const m = marks().color('#f0f0f0');
      expect(() => validateMark(m)).to.not.throw(ValidationError);
      expect(m.toJSON()).to.deep.equal([{
        type: 'textColor',
        attrs: {
          color: '#f0f0f0'
        }
      }]);
    });

    it('should reject invalid color patterns', () => {
      expect(() => marks().color('f0f0f0')).to.throw();
    });

  });

  describe('underline', () => {
    it('should create a valid underline mark', () => {
      const m = marks().underline();
      expect(() => validateMark(m)).to.not.throw(ValidationError);
      expect(m.toJSON()).to.deep.equal([{
        type: 'underline'
      }]);
    });
  });

  describe('action', () => {

    it('should create a valid action mark', () => {
      const m = marks().action('Title', { key: 'key' });
      expect(() => validateMark(m)).to.not.throw(ValidationError);
      expect(m.toJSON()).to.deep.equal([{
        type: 'action',
        attrs: {
          title: 'Title',
          target: {
            key: 'key'
          }
        }
      }]);
    });

    it('should create a valid action mark with receiver', () => {
      const m = marks().action('Title', { key: 'key', receiver: 'app' });
      expect(() => validateMark(m)).to.not.throw(ValidationError);
      expect(m.toJSON()).to.deep.equal([{
        type: 'action',
        attrs: {
          title: 'Title',
          target: {
            key: 'key',
            receiver: 'app'
          }
        }
      }]);
    });

    it('should create a valid action mark with parameters', () => {
      const m = marks().action('Title', { key: 'key'}, {'key1': 'value1', 'key2': 'value2'} );
      console.log(m.toJSON());
      expect(() => validateMark(m)).to.not.throw(ValidationError);
      expect(m.toJSON()).to.deep.equal([{
        type: 'action',
        attrs: {
          title: 'Title',
          target: {
            key: 'key'
          },
          parameters: {
            'key1': 'value1',
            'key2': 'value2'
          }
        }
      }]);
    });
  });
});
