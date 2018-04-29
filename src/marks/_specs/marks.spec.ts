import { expect, use } from 'chai';
import { marks, Marks } from '../';
import { Document } from '../../index';
import { adfValidator } from '../../_chai';

describe('Marks', () => {

  function docFromMark(mark: Marks) {
    const doc = new Document();
    doc.paragraph().text('any', mark);
    return doc;
  }

  before(async function() {
    this.timeout(5000);
    use(await adfValidator());
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
      expect(docFromMark(m)).to.be.validADF();
      expect(m.toJSON()).to.deep.equal([{
        type: 'code'
      }]);
    });
  });

  describe('em', () => {
    it('should create a valid em mark', () => {
      const m = marks().em();
      expect(docFromMark(m)).to.be.validADF();
      expect(m.toJSON()).to.deep.equal([{
        type: 'em'
      }]);
    });
  });

  describe('link', () => {

    it('should create a valid link mark', () => {
      const m = marks().link('https://example.com');
      expect(docFromMark(m)).to.be.validADF();
      expect(m.toJSON()).to.deep.equal([{
        type: 'link',
        attrs: {
          href: 'https://example.com'
        }
      }]);
    });

    it('should support an optional title', () => {
      const m = marks().link('https://example.com', 'Title');
      expect(docFromMark(m)).to.be.validADF();
      expect(m.toJSON()).to.deep.equal([{
        type: 'link',
        attrs: {
          href: 'https://example.com',
          title: 'Title'
        }
      }]);
    });
  });

  describe('strike', () => {
    it('should create a valid strike mark', () => {
      const m = marks().strike();
      expect(docFromMark(m)).to.be.validADF();
      expect(m.toJSON()).to.deep.equal([{
        type: 'strike'
      }]);
    });
  });

  describe('strong', () => {
    it('should create a valid strong mark', () => {
      const m = marks().strong();
      expect(docFromMark(m)).to.be.validADF();
      expect(m.toJSON()).to.deep.equal([{
        type: 'strong'
      }]);
    });
  });

  describe('subsup', () => {

    it('should create a valid sub mark', () => {
      const m = marks().sub();
      expect(docFromMark(m)).to.be.validADF();
      expect(m.toJSON()).to.deep.equal([{
        type: 'subsup',
        attrs: {
          type: 'sub'
        }
      }]);
    });

    it('should create a valid sup mark', () => {
      const m = marks().sup();
      expect(docFromMark(m)).to.be.validADF();
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
      expect(docFromMark(m)).to.be.validADF();
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
      expect(docFromMark(m)).to.be.validADF();
      expect(m.toJSON()).to.deep.equal([{
        type: 'underline'
      }]);
    });
  });

  describe('action', () => {

    it('should create a valid action mark', () => {
      const m = marks().action('Title', { key: 'key' });
      expect(docFromMark(m)).to.be.validADF();
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
      expect(docFromMark(m)).to.be.validADF();
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
      const m = marks().action('Title', { key: 'key' }, { key1: 'value1', key2: 'value2' });
      expect(docFromMark(m)).to.be.validADF();
      expect(m.toJSON()).to.deep.equal([{
        type: 'action',
        attrs: {
          title: 'Title',
          target: {
            key: 'key'
          },
          parameters: {
            key1: 'value1',
            key2: 'value2'
          }
        }
      }]);
    });
  });
});
