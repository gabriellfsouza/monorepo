
import express from 'express';
import 'express-async-errors';
import './app/validators/ValidationError';
import Youch from 'youch';

import routes from './routes';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use('/v1/api', routes);
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, _next) => {
      if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
        const errors = await new Youch(err, req).toJSON;
        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: 'Internal server error' });
    });
  }
}

export default new App().server;
