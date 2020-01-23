import './styles.css';

import React, { memo } from 'react';

import { useInputValue, useTodos } from '../../utils/custom-hooks';

import Layout from '../../components/Layout';

import AddTodo from '../../components/AddTodo';
import TodoList from '../../components/TodoList';

const ToDoApp = memo((_props) => {
  const {
    inputValue, changeInput, clearInput, keyInput,
  } = useInputValue();
  const {
    todos, addTodo, checkTodo, removeTodo,
  } = useTodos();

  const clearInputAndAddTodo = (_) => {
    clearInput();
    addTodo(inputValue);
  };

  return (
    <Layout>
      <AddTodo
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={(event) => keyInput(event, clearInputAndAddTodo)}
      />
      <TodoList
        items={todos}
        onItemCheck={(idx) => checkTodo(idx)}
        onItemRemove={(idx) => removeTodo(idx)}
      />
    </Layout>
  );
});
export default ToDoApp;
