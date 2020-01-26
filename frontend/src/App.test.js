import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from '~/contexts/ToDoContext';
import App from '~/App';

test('renders learn react link', () => {
  const { getByText } = render(<Provider><App /></Provider>);
  const linkElement = getByText(/TODO APP/i);
  expect(linkElement).toBeInTheDocument();
});
