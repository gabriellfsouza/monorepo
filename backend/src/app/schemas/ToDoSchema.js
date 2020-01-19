import { Schema, model } from "mongoose";

/**
 * Todo mongo database schema's definition
 */
const ToDoSchema = new Schema({
  text: String,
  checked: {
    type: Boolean,
    default: false
  }
});

export default model("ToDo", ToDoSchema);
