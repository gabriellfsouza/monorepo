import ToDo from "../schemas/ToDoSchema";

class ToDoController {
  /**
   * Store new ToDo
   * @param {Request} req
   * @param {Response} res
   */
  store(req, res) {
    res.status(204).send();
  }

  /**
   * Update a preexisting ToDo
   * @param {*} req
   * @param {*} res
   */
  update(req, res) {
    res.status(204).send();
  }

  /**
   * Returns a ToDo list
   * @param {*} req
   * @param {*} res
   */
  index(req, res) {
    res.status(204).send();
  }

  /**
   * Returns a specific ToDo
   * @param {*} req
   * @param {*} res
   */
  show(req, res) {
    res.status(204).send();
  }
}
