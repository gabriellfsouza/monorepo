import ListToDoService from '~/app/services/ListToDoService';
import database from '~/database';
import ToDo from '~/app/schemas/ToDoSchema';
import ToDoFactory from '~/__tests__/utils/factories/ToDoFactory';

describe('This test\'ll run the list method of to-do tasks.', () => {
  // object shared by all tests
  let toDos;

  beforeAll(async () => {
    await database.mongo();
  });

  afterAll(async () => {
    await database.mongoConnection.disconnect();
  });

  beforeEach(async () => {
    try {
      await Promise.all([
        ToDoFactory.create('ToDo', {}),
        ToDoFactory.create('ToDo', {}),
        ToDoFactory.create('ToDo', {}),
        ToDoFactory.create('ToDo', {}),
        ToDoFactory.create('ToDo', {}),
        ToDoFactory.create('ToDo', {}),
      ]);
    } catch (error) {
      process.exit();
    }
    toDos = await ToDo.find();
  });

  afterEach(async () => {
    ToDo.remove({});
  });

  it('should be able to list all tasks created before',
    async () => {
      const response = await ListToDoService.run();

      expect(toDos).toMatchObject(response);
    });
});
