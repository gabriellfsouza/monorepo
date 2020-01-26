import { Router } from 'express';
import todos from './todos';

const routes = new Router();

/**
 * To-do's route
 */
routes.use('/todos', todos);


export default routes;
