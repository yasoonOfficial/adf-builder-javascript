import { expect } from 'chai';
import { code, document, em, emoji, link, mention, strike, strong, ApplicationCard } from '../index';
import { validator, ValidationError, Validator } from './validate';

describe('Template Tag', () => {

  let validate: Validator;

  before(async function() {
    this.timeout(5000);
    validate = await validator();
  });

  it('should support simple strings', () => {

    const doc = document`Hello`;

    expect(() => validate(doc)).to.not.throw(ValidationError);
    expect(doc.toJSON()).to.deep.equal({
      type: 'doc',
      version: 1,
      content: [
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'Hello'
            }
          ]
        }
      ]
    });
  });

  it('should support simple template variables', () => {

    const doc = document`Result: ${1 + 1}`;

    expect(() => validate(doc)).to.not.throw(ValidationError);
    expect(doc.toJSON()).to.deep.equal({
      type: 'doc',
      version: 1,
      content: [
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'Result: '
            },
            {
              type: 'text',
              text: '2'
            }
          ]
        }
      ]
    });
  });

  it('should support strike style nodes', () => {

    const doc = document`A ${strike('strike')} statement`;

    expect(() => validate(doc)).to.not.throw(ValidationError);
    expect(doc.toJSON()).to.deep.equal({
      type: 'doc',
      version: 1,
      content: [
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'A '
            },
            {
              type: 'text',
              text: 'strike',
              marks: [
                {
                  type: 'strike'
                }
              ]
            },
            {
              type: 'text',
              text: ' statement'
            },
          ]
        }
      ]
    });
  });

  it('should support strong style nodes', () => {

    const doc = document`A ${strong('strong')} statement`;

    expect(() => validate(doc)).to.not.throw(ValidationError);
    expect(doc.toJSON()).to.deep.equal({
      type: 'doc',
      version: 1,
      content: [
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'A '
            },
            {
              type: 'text',
              text: 'strong',
              marks: [
                {
                  type: 'strong'
                }
              ]
            },
            {
              type: 'text',
              text: ' statement'
            },
          ]
        }
      ]
    });
  });

  it('should support em style nodes', () => {

    const doc = document`A ${em('emphasized')} statement`;

    expect(() => validate(doc)).to.not.throw(ValidationError);
    expect(doc.toJSON()).to.deep.equal({
      type: 'doc',
      version: 1,
      content: [
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'A '
            },
            {
              type: 'text',
              text: 'emphasized',
              marks: [
                {
                  type: 'em'
                }
              ]
            },
            {
              type: 'text',
              text: ' statement'
            },
          ]
        }
      ]
    });
  });

  it('should support code style nodes', () => {

    const doc = document`A ${code('code')} statement`;

    expect(() => validate(doc)).to.not.throw(ValidationError);
    expect(doc.toJSON()).to.deep.equal({
      type: 'doc',
      version: 1,
      content: [
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'A '
            },
            {
              type: 'text',
              text: 'code',
              marks: [
                {
                  type: 'code'
                }
              ]
            },
            {
              type: 'text',
              text: ' statement'
            },
          ]
        }
      ]
    });
  });

  it('should support link style nodes', () => {

    const doc = document`A ${link('linked', 'https://example.com')} statement`;

    expect(() => validate(doc)).to.not.throw(ValidationError);
    expect(doc.toJSON()).to.deep.equal({
      type: 'doc',
      version: 1,
      content: [
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'A '
            },
            {
              type: 'text',
              text: 'linked',
              marks: [
                {
                  type: 'link',
                  attrs: {
                    href: 'https://example.com'
                  }
                }
              ]
            },
            {
              type: 'text',
              text: ' statement'
            },
          ]
        }
      ]
    });
  });

  it('should support mention nodes', () => {

    const doc = document`A ${mention('123', 'name')}`;

    expect(() => validate(doc)).to.not.throw(ValidationError);
    expect(doc.toJSON()).to.deep.equal({
      type: 'doc',
      version: 1,
      content: [
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'A '
            },
            {
              attrs: {
                id: '123',
                text: 'name'
              },
              type: 'mention'
            }
          ]
        }
      ]
    });
  });

  it('should support emoji nodes', () => {

    const doc = document`A ${emoji('smile')}`;

    expect(() => validate(doc)).to.not.throw(ValidationError);
    expect(doc.toJSON()).to.deep.equal({
      type: 'doc',
      version: 1,
      content: [
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'A '
            },
            {
              attrs: {
                shortName: 'smile',
              },
              type: 'emoji'
            }
          ]
        }
      ]
    });
  });

  it('should support multiple style nodes', () => {

    const doc = document`Hi ${mention('123', 'there')}.
    This is a ${strong('strong text')}.
    It also contains ${link('a link', 'http://example.com')}.
    Other replacements work, too: ${5}`;

    expect(() => validate(doc)).to.not.throw(ValidationError);
  });

  it('should support skip empty string substitutions', () => {
    const a = '';
    const doc = document`A ${a} variable`;
    expect(doc.toJSON()).to.deep.equal({
      type: 'doc',
      version: 1,
      content: [
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'A '
            },
            {
              type: 'text',
              text: ' variable'
            },
          ]
        }
      ]
    });
  });

  it('should not allow top-level nodes', () => {
    const doc = () => document`A card: ${new ApplicationCard('title')}`;
    expect(doc).to.throw();
  });

  it('should handle empty strings', () => {
    const doc = document``;
    expect(() => doc.toJSON()).to.throw();
  });

  it('should handle substitutions at the beginning', () => {
    const doc = document`${emoji('smile')} A`;
    expect(() => validate(doc)).to.not.throw(ValidationError);
    expect(doc.toJSON()).to.deep.equal({
      type: 'doc',
      version: 1,
      content: [
        {
          type: 'paragraph',
          content: [
            {
              attrs: {
                shortName: 'smile',
              },
              type: 'emoji'
            },
            {
              type: 'text',
              text: ' A'
            }
          ]
        }
      ]
    });
  });
});
