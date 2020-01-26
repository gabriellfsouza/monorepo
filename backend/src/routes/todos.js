import { Router } from 'express';
import CreateToDoValidator from '../app/validators/ToDo/CreateToDoValidator';
import UpdateToDoValidator from '../app/validators/ToDo/UpdateToDoValidator';

import ToDoController from '../app/controllers/ToDoController';

const routes = new Router();

routes
  .route('/')
  .post([CreateToDoValidator], ToDoController.store)
  .get(ToDoController.index);

routes
  .route('/:_id')
  .get(ToDoController.show)
  .put([UpdateToDoValidator], ToDoController.update)
  .delete(ToDoController.destroy);

export default routes;
