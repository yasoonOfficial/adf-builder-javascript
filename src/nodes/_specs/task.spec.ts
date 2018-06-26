import { expect, use } from 'chai';
import { Document } from '../../index';
import { adfValidator } from '../../_chai';
import { TaskState } from '../task';

describe('Task', () => {

  before(async function() {
    this.timeout(5000);
    use(await adfValidator());
  });

  it('should not allow task list items without content', () => {
    const doc = new Document();
    const task = doc.taskList('1').task('1', TaskState.TODO);
    expect(() => task.toJSON()).to.throw();
  });

  it('should create a text node in the task', () => {
    const doc = new Document();
    const task = doc.taskList('1')
      .task('1', TaskState.DONE)
      .text('a');
    expect(doc).to.be.validADF();
    expect(task.toJSON()).to.deep.equal({
      type: 'taskItem',
      attrs: {
        localId: '1',
        state: 'DONE'
      },
      content: [
        {
          type: 'text',
          text: 'a'
        }
      ]
    });
  });

  it('should create a code node in the task', () => {
    const doc = new Document();
    const task = doc.taskList('1')
      .task('1', TaskState.DONE)
      .code('a');
    expect(doc).to.be.validADF();
    expect(task.toJSON()).to.deep.equal({
      type: 'taskItem',
      attrs: {
        localId: '1',
        state: 'DONE'
      },
      content: [
        {
          type: 'text',
          text: 'a',
          marks: [
            { type: 'code' }
          ]
        }
      ]
    });
  });

  it('should create a em node in the task', () => {
    const doc = new Document();
    const task = doc.taskList('1')
      .task('1', TaskState.DONE)
      .em('a');
    expect(doc).to.be.validADF();
    expect(task.toJSON()).to.deep.equal({
      type: 'taskItem',
      attrs: {
        localId: '1',
        state: 'DONE'
      },
      content: [
        {
          type: 'text',
          text: 'a',
          marks: [
            { type: 'em' }
          ]
        }
      ]
    });
  });

  it('should create a strike node in the task', () => {
    const doc = new Document();
    const task = doc.taskList('1')
      .task('1', TaskState.DONE)
      .strike('a');
    expect(doc).to.be.validADF();
    expect(task.toJSON()).to.deep.equal({
      type: 'taskItem',
      attrs: {
        localId: '1',
        state: 'DONE'
      },
      content: [
        {
          type: 'text',
          text: 'a',
          marks: [
            { type: 'strike' }
          ]
        }
      ]
    });
  });

  it('should create a strong node in the task', () => {
    const doc = new Document();
    const task = doc.taskList('1')
      .task('1', TaskState.DONE)
      .strong('a');
    expect(doc).to.be.validADF();
    expect(task.toJSON()).to.deep.equal({
      type: 'taskItem',
      attrs: {
        localId: '1',
        state: 'DONE'
      },
      content: [
        {
          type: 'text',
          text: 'a',
          marks: [
            { type: 'strong' }
          ]
        }
      ]
    });
  });

  it('should create an emoji node in the task', () => {
    const doc = new Document();
    const task = doc.taskList('1')
      .task('1', TaskState.DONE)
      .emoji('a');
    expect(doc).to.be.validADF();
    expect(task.toJSON()).to.deep.equal({
      type: 'taskItem',
      attrs: {
        localId: '1',
        state: 'DONE'
      },
      content: [
        {
          type: 'emoji',
          attrs: {
            shortName: 'a'
          }
        }
      ]
    });
  });

  it('should create a hardBreak node in the task', () => {
    const doc = new Document();
    const task = doc.taskList('1')
      .task('1', TaskState.DONE)
      .hardBreak();
    expect(doc).to.be.validADF();
    expect(task.toJSON()).to.deep.equal({
      type: 'taskItem',
      attrs: {
        localId: '1',
        state: 'DONE'
      },
      content: [
        {
          type: 'hardBreak',
          attrs: {
            text: '\n'
          }
        }
      ]
    });
  });

  it('should create a link node in the task', () => {
    const doc = new Document();
    const task = doc.taskList('1')
      .task('1', TaskState.DONE)
      .link('a', 'https://example.com/a');
    expect(doc).to.be.validADF();
    expect(task.toJSON()).to.deep.equal({
      type: 'taskItem',
      attrs: {
        localId: '1',
        state: 'DONE'
      },
      content: [
        {
          type: 'text',
          text: 'a',
          marks: [
            {
              type: 'link',
              attrs: { href: 'https://example.com/a' }
            }
          ]
        }
      ]
    });
  });

  it('should create a mention node in the task', () => {
    const doc = new Document();
    const task = doc.taskList('1')
      .task('1', TaskState.DONE)
      .mention('123', 'a');
    expect(doc).to.be.validADF();
    expect(task.toJSON()).to.deep.equal({
      type: 'taskItem',
      attrs: {
        localId: '1',
        state: 'DONE'
      },
      content: [
        {
          type: 'mention',
          attrs: {
            id: '123',
            text: 'a'
          }
        }
      ]
    });
  });

});
