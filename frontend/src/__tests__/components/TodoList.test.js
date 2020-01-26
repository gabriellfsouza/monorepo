import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import TodoList from '~/components/TodoList';

describe('TodoList', () => {
  const todos = [
    { checked: true, text: '1234' },
    { checked: false, text: 'Isat dolor' },
    { checked: false, text: 'Loren ipsum' },
  ];
  afterEach(cleanup);

  it('should be able to render the component', async () => {
    const { getByTestId, baseElement } = render(<TodoList />);
    expect(baseElement).toContainElement(getByTestId('todo-list'));
  });

  it('should be able to show todos', async () => {
    const { getByTestId, getByText } = render(<TodoList items={todos} />);
    expect(getByTestId('todo-list')).toContainElement(getByText('1234'));
    expect(getByTestId('todo-list')).toContainElement(getByText('Isat dolor'));
    expect(getByTestId('todo-list')).toContainElement(getByText('Loren ipsum'));
  });

  it('should be able to fire checked and remove events', async () => {
    const handleItemCheck = jest.fn();
    const handleItemRemove = jest.fn();

    const {
      baseElement,
    } = render(<TodoList
      items={todos}
      onItemRemove={handleItemRemove}
      onItemCheck={handleItemCheck}
    />);

    expect(baseElement.querySelectorAll('.Mui-checked').length).toBe(1);
    expect(baseElement
      .querySelectorAll('[aria-label="Delete Todo"')
      .length).toBe(3);

    const radio = baseElement.querySelector('.Mui-checked');
    const button = baseElement
      .querySelector('[aria-label="Delete Todo"');
    fireEvent.click(radio);
    fireEvent.click(button);

    expect(handleItemCheck).toHaveBeenCalled();
    expect(handleItemRemove).toHaveBeenCalled();
  });
});
