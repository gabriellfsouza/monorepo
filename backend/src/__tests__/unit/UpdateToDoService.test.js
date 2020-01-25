import UpdateToDoService from '~/app/services/UpdateToDoService';
import database from '~/database';
import ToDo from '~/app/schemas/ToDoSchema';
import ToDoFaker from '~/__tests__/utils/fakers/ToDoFaker';
import ToDoFactory from '~/__tests__/utils/factories/ToDoFactory';

describe('This test\'ll run the create method of a to-do task.', () => {
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

  it('should be able to update a to-do task and your own updated_at field',
    async () => {
      const before = await ToDo.findById(_id);

      const response = await UpdateToDoService.run(_id,
        ToDoFaker.create());

      const after = await ToDo.findById(_id);

      expect(after.created_at).toBe(before.created_at);
      expect(after).toMatchObject(response);
    });
});
