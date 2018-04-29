import { expect, use } from 'chai';
import { Document } from '../../index';
import { adfValidator } from '../../_chai';

describe('Ordered List', () => {

  before(async function() {
    this.timeout(5000);
    use(await adfValidator());
  });

  it('should not allow empty ordered lists', () => {
    const doc = new Document();
    doc.orderedList();
    expect(() => doc.toJSON()).to.throw();
  });

  describe('item', () => {

    it('should not allow empty items', () => {
      const doc = new Document();
      doc.orderedList().item();
      expect(() => doc.toJSON()).to.throw();
    });

    it('should create a valid ordered list with a single entry', () => {
      const doc = new Document();
      const list = doc.orderedList();
      list.item().paragraph().text('item');
      expect(doc).to.be.validADF();
      expect(list.toJSON()).to.deep.equal({
        type: 'orderedList',
        content: [
          {
            type: 'listItem',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    text: 'item',
                    type: 'text'
                  }
                ]
              }
            ]
          }
        ]
      });
    });

    it('should create a valid ordered list with multiple entries', () => {
      const doc = new Document();
      const list = doc.orderedList();
      list.item().paragraph().text('item1');
      list.item().paragraph().text('item2');
      expect(doc).to.be.validADF();
      expect(list.toJSON()).to.deep.equal({
        type: 'orderedList',
        content: [
          {
            type: 'listItem',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    text: 'item1',
                    type: 'text'
                  }
                ]
              }
            ]
          },
          {
            type: 'listItem',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    text: 'item2',
                    type: 'text'
                  }
                ]
              }
            ]
          }
        ]
      });
    });

    it('should create a nested bullet list', () => {
      const doc = new Document();
      const list = doc.orderedList();
      const item = list.item();
      item.paragraph().text('line 1');
      item.bulletList().item().paragraph().text('nested');
      expect(doc).to.be.validADF();
      expect(list.toJSON()).to.deep.equal({
        type: 'orderedList',
        content: [
          {
            type: 'listItem',
            content: [
              {
                type: 'paragraph',
                content: [{ type: 'text', text: 'line 1' }]
              },
              {
                type: 'bulletList',
                content: [
                  {
                    type: 'listItem',
                    content: [
                      {
                        type: 'paragraph',
                        content: [{ type: 'text', text: 'nested' }]
                      }]
                  }]
              }]
          }]
      });
    });

    it('should create a nested ordered list', () => {
      const doc = new Document();
      const list = doc.orderedList();
      const item = list.item();
      item.paragraph().text('line 1');
      item.orderedList().item().paragraph().text('nested');
      expect(doc).to.be.validADF();
      expect(list.toJSON()).to.deep.equal({
        type: 'orderedList',
        content: [
          {
            type: 'listItem',
            content: [
              {
                type: 'paragraph',
                content: [{ type: 'text', text: 'line 1' }]
              },
              {
                type: 'orderedList',
                content: [
                  {
                    type: 'listItem',
                    content: [
                      {
                        type: 'paragraph',
                        content: [{ type: 'text', text: 'nested' }]
                      }]
                  }]
              }]
          }]
      });
    });
  });

  describe('textItem', () => {
    it('should create a valid ordered list with multiple entries', () => {
      const doc = new Document();
      const list = doc.orderedList();
      list
        .textItem('item1')
        .textItem('item2');
      expect(doc).to.be.validADF();
      expect(list.toJSON()).to.deep.equal({
        type: 'orderedList',
        content: [
          {
            type: 'listItem',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    text: 'item1',
                    type: 'text'
                  }
                ]
              }
            ]
          },
          {
            type: 'listItem',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    text: 'item2',
                    type: 'text'
                  }
                ]
              }
            ]
          }
        ]
      });
    });
  });

  describe('linkItem', () => {
    it('should create a valid ordered list with multiple entries', () => {
      const doc = new Document();
      const list = doc.orderedList();
      list
        .linkItem('Link 1', 'https://example.com/1')
        .linkItem('Link 2', 'https://example.com/2');
      expect(doc).to.be.validADF();
      expect(list.toJSON()).to.deep.equal({
        type: 'orderedList',
        content: [
          {
            type: 'listItem',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    text: 'Link 1',
                    type: 'text',
                    marks: [
                      {
                        attrs: {
                          href: 'https://example.com/1'
                        },
                        type: 'link'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: 'listItem',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    text: 'Link 2',
                    type: 'text',
                    marks: [
                      {
                        attrs: {
                          href: 'https://example.com/2'
                        },
                        type: 'link'
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
});
