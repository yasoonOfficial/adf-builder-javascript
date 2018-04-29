import { expect, use } from 'chai';
import { Document } from '../../index';
import { adfValidator } from '../../_chai';

describe('Panel', () => {

  before(async function() {
    this.timeout(5000);
    use(await adfValidator());
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
    expect(doc).to.be.validADF();
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
    expect(doc).to.be.validADF();
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
    expect(doc).to.be.validADF();
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
    expect(doc).to.be.validADF();
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
