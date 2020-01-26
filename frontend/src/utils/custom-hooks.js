import { useContext, useState } from 'react';
import { Context } from '~/contexts/ToDoContext';
import {
  removeTodo as deleteTodo,
  updateTodo,
  addTodo as postTodo,
} from '~/services/api/todos';

export const useInputValue = (initialValue = '') => {
  const [inputValue, setInputValue] = useState(initialValue);

  return {
    inputValue,
    changeInput: (event) => setInputValue(event.target.value),
    clearInput: () => setInputValue(''),
    keyInput: (event, callback) => {
      if (event.which === 13 || event.keyCode === 13) {
        callback(inputValue);
        return true;
      }

      return false;
    },
  };
};

/**
 *
 * @param {*} initialValue
 */
export const useTodos = () => {
  const { todos, setToDos } = useContext(Context);

  async function addTodo(text) {
    if (text === '') return;
    const response = await postTodo({ text });
    setToDos(todos.concat(response.data));
  }

  async function checkTodo(idx) {
    const { _id, checked } = todos.find((t, i) => i === idx);
    const response = await updateTodo(_id, { checked: !checked });
    setToDos(todos.map((t, i) => ((i !== idx) ? t : response.data)));
  }

  async function removeTodo(idx) {
    const { _id } = todos.find((t, i) => i === idx);
    await deleteTodo(_id);
    setToDos(todos.filter((t, i) => i !== idx));
  }

  return {
    addTodo,
    checkTodo,
    removeTodo,
    // addTodo: (text) => {
    //   if (text !== '') {
    //     setToDos(
    //       todos.concat({
    //         text,
    //         checked: false,
    //       }),
    //     );
    //   }
    // },
    // checkTodo: (idx) => {
    //   setToDos(
    //     todos.map((todo, index) => {
    //       if (idx === index) {
    //         todo.checked = !todo.checked;
    //       }

    //       return todo;
    //     }),
    //   );
    // },
    // removeTodo: (idx) => {
    //   setToDos(todos.filter((todo, index) => idx !== index));
    // },
  };
};
