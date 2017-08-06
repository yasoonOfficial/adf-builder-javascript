import { expect } from 'chai';
import { Document } from '../../index';
import { validator, ValidationError, Validator } from '../../_specs/validate';

describe('Panel', () => {

  let validate: Validator;

  before(async function() {
    this.timeout(5000);
    validate = await validator();
  });

  it('should not allow empty panel', () => {
    const doc = new Document();
    const panel = doc.panel('info');
    expect(() => panel.toJSON()).to.throw();
  });

  it('should create valid panel with a paragraph', () => {
    const doc = new Document();
    const panel = doc.panel('info');
    panel.paragraph().text('Info');
    expect(() => validate(doc)).to.not.throw(ValidationError);
    expect(panel.toJSON()).to.deep.equal({
      type: 'panel',
      attrs: {
        panelType: 'info'
      },
      content: [
        {
          type: 'paragraph',
          content: [
            { type: 'text', text: 'Info' }
          ]
        }
      ]
    });
  });

  it('should create valid panel with a heading', () => {
    const doc = new Document();
    const panel = doc.panel('warning');
    panel.heading(2).link('Heading', '');
    expect(() => validate(doc)).to.not.throw(ValidationError);
    expect(panel.toJSON()).to.deep.equal({
      type: 'panel',
      attrs: {
        panelType: 'warning'
      },
      content: [
        {
          type: 'heading',
          attrs: {
            level: 2
          },
          content: [
            {
              type: 'text',
              text: 'Heading',
              marks: [
                {
                  type: 'link',
                  attrs: {
                    href: ''
                  }
                }
              ]
            }
          ]
        }
      ]
    });
  });

  it('should create valid panel with a bullet list', () => {
    const doc = new Document();
    const panel = doc.panel('tip');
    panel.bulletList().textItem('a');
    expect(() => validate(doc)).to.not.throw(ValidationError);
    expect(panel.toJSON()).to.deep.equal({
      type: 'panel',
      attrs: {
        panelType: 'tip'
      },
      content: [
        {
          type: 'bulletList',
          content: [
            {
              type: 'listItem',
              content: [
                {
                  type: 'paragraph',
                  content: [
                    {
                      type: 'text',
                      text: 'a',
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

  it('should create valid panel with an ordered list', () => {
    const doc = new Document();
    const panel = doc.panel('note');
    panel.orderedList().textItem('a');
    expect(() => validate(doc)).to.not.throw(ValidationError);
    expect(panel.toJSON()).to.deep.equal({
      type: 'panel',
      attrs: {
        panelType: 'note'
      },
      content: [
        {
          type: 'orderedList',
          content: [
            {
              type: 'listItem',
              content: [
                {
                  type: 'paragraph',
                  content: [
                    {
                      type: 'text',
                      text: 'a',
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
