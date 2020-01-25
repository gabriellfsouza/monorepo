/* eslint-disable import/first */
import { config } from 'dotenv';

config({ path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env' });

import express from 'express';
import 'express-async-errors';
import './app/validators/ValidationError';
import './database';
import Youch from 'youch';

import routes from './routes';
/**
 * Base app class.
 */
class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  /**
   * Declare all middlewares to be used on all requests
   */
  middlewares() {
    this.server.disable('x-powered-by');
    this.server.use(express.json());
  }

  /**
   * Declare the base routes
   */
  routes() {
    this.server.get('/', (req, res) => { res.json({ info: 'ok' }); });
    this.server.use('/v1/api', routes);
  }

  /**
   * Default exception handler (that method prevent the app to broke)
   */
  exceptionHandler() {
    this.server.use(async (err, req, res, _next) => {
      if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
        const errors = await new Youch(err, req).toJSON();
        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: 'Internal server error' });
    });
  }
}

export default new App().server;
