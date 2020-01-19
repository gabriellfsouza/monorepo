import ToDo from "../schemas/ToDoSchema";
import GetToDoService from "./GetToDoService";
class CreateToDoService {
  async run(data) {
    const toDo = await ToDo.create(data);

    return GetToDoService.run(toDo._id);
  }
}

export default new CreateToDoService();
