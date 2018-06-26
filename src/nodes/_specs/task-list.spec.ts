import { expect, use } from 'chai';
import { Document } from '../../index';
import { adfValidator } from '../../_chai';
import { TaskState } from '../task';

describe('Decision List', () => {

  before(async function() {
    this.timeout(5000);
    use(await adfValidator());
  });

  it('should not allow empty task lists', () => {
    const doc = new Document();
    const list = doc.taskList('1');
    expect(() => list.toJSON()).to.throw();
  });

  it('should create valid task list with one item', () => {
    const doc = new Document();
    const list = doc.taskList('1');
    list.task('2', TaskState.TODO).text('DACI');
    expect(doc).to.be.validADF();
    expect(list.toJSON()).to.deep.equal({
      type: 'taskList',
      attrs: {
        localId: '1'
      },
      content: [
        {
          type: 'taskItem',
          attrs: {
            localId: '2',
            state: 'TODO'
          },
          content: [
            {
              text: 'DACI',
              type: 'text'
            }
          ]
        }
      ]
    });
  });

  it('should create valid task list with multiple items', () => {
    const doc = new Document();
    const list = doc.taskList('1');
    list.task('2', TaskState.DONE).text('DACI 2');
    list.task('3', TaskState.TODO).text('DACI 3');
    expect(doc).to.be.validADF();
    expect(list.toJSON()).to.deep.equal({
      type: 'taskList',
      attrs: {
        localId: '1'
      },
      content: [
        {
          type: 'taskItem',
          attrs: {
            localId: '2',
            state: 'DONE'
          },
          content: [
            {
              text: 'DACI 2',
              type: 'text'
            }
          ]
        },
        {
          type: 'taskItem',
          attrs: {
            localId: '3',
            state: 'TODO'
          },
          content: [
            {
              text: 'DACI 3',
              type: 'text'
            }
          ]
        }
      ]
    });
  });

});
