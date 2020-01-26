import React, { useEffect, useContext } from 'react';
import { Context } from '~/contexts/ToDoContext';
import { listTodos } from './services/api/todos';
import './App.css';
import ToDoApp from './pages/ToDoApp';

function App() {
  const { setToDos } = useContext(Context);

  useEffect(() => {
    async function get() {
      const response = await listTodos();
      setToDos(response.data);
    }
    get();
  }, []);

  return (
    <div className="App">
      <ToDoApp />
    </div>
  );
}

export default App;
