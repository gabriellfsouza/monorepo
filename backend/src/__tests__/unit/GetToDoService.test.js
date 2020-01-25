import GetToDoService from '~/app/services/GetToDoService';
import database from '~/database';
import ToDo from '~/app/schemas/ToDoSchema';
import ToDoFactory from '~/__tests__/utils/factories/ToDoFactory';

describe('This test\'ll run the get method of a to-do task.', () => {
  // id shared by all tests
  let _id;

  beforeAll(async () => {
    await database.mongo();
  });

  afterAll(async () => {
    await database.mongoConnection.disconnect();
  });

  beforeEach(async () => {
    const toDo = await ToDoFactory.create('ToDo', {});
    _id = toDo._id;
  });

  afterEach(async () => {
    ToDo.remove({});
  });

  it('should be able to reutrn a previously created to-do task',
    async () => {
      const toDo = await ToDo.findById(_id);

      const response = await GetToDoService.run(_id);

      expect(toDo).toMatchObject(response);
    });
});
