import CreateToDoService from '~/app/services/CreateToDoService';
import GetToDoService from '~/app/services/GetToDoService';
import ListToDoService from '~/app/services/ListToDoService';
import UpdateToDoService from '~/app/services/UpdateToDoService';
import ControllerUtils from '~/app/utils/ControllerUtils';

class ToDoController extends ControllerUtils {
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
    const promise = (async () => UpdateToDoService.run(req.body))();

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
    const promise = (async () => GetToDoService.run(req.body))();

    this.defaultHandler(res, promise);
  }
}

export default new ToDoController();
