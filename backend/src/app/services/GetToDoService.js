import ToDo from "../schemas/ToDoSchema";
import { Schema, Document } from "mongoose";
class GetToDoService {
  /**
   *
   * @param {Schema.Types.ObjectId} _id
   * @returns {Document}
   */
  async run(_id) {
    const toDo = await ToDo.findById(_id);

    return toDo;
  }
}

export default new GetToDoService();
