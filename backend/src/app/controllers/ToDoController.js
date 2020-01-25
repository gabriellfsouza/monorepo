import CreateToDoService from '../services/CreateToDoService';
import GetToDoService from '../services/GetToDoService';
import ListToDoService from '../services/ListToDoService';
import UpdateToDoService from '../services/UpdateToDoService';
import DeleteToDoService from '../services/DeleteToDoService';
import ControllerUtils from '../utils/ControllerUtils';

class ToDoController extends ControllerUtils {
  constructor() {
    super();

    this.store = this.store.bind(this);
    this.update = this.update.bind(this);
    this.index = this.index.bind(this);
    this.destroy = this.destroy.bind(this);
    this.show = this.show.bind(this);
  }

  /**
   * Store new ToDo
   * @param {Request} req
   * @param {Response} res
   */
  async store(req, res) {
    const promise = (async () => CreateToDoService.run(req.body))();

    this.defaultHandler(res, promise);
  }

  /**
   * Update a preexisting ToDo
   * @param {Request} req
   * @param {Response} res
   */
  async update(req, res) {
    const { _id } = req.params;
    const promise = (async () => UpdateToDoService.run(_id, req.body))();

    this.defaultHandler(res, promise);
  }

  /**
   * Returns a ToDo list
   * @param {Request} req
   * @param {Response} res
   */
  async index(req, res) {
    const promise = (async () => ListToDoService.run(req.body))();

    this.defaultHandler(res, promise);
  }

  /**
   * Returns a specific ToDo
   * @param {Request} req
   * @param {Response} res
   */
  async show(req, res) {
    const { _id } = req.params;
    const promise = (async () => GetToDoService.run(_id, req.body))();

    this.defaultHandler(res, promise);
  }

  /**
   * Delete a specific ToDo
   * @param {Request} req
   * @param {Response} res
   */
  async destroy(req, res) {
    const { _id } = req.params;
    const promise = (async () => DeleteToDoService.run(_id, req.body))();

    this.defaultHandler(res, promise);
  }
}

export default new ToDoController();
