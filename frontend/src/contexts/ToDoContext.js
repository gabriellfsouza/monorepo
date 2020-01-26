import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

export function Provider({ children }) {
  const [todos, setToDos] = useState();

  return (
    <Context.Provider value={{ todos, setToDos }}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
};
