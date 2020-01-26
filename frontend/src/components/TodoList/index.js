import React, { memo } from 'react';
import { List, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';

import TodoListItem from '~/components/TodoListItem';

const TodoList = memo((props) => (
  <div data-testid="todo-list">
    {props.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List style={{ overflow: 'scroll' }}>
          {props.items.map((todo, idx) => (
            <TodoListItem
              {...todo}
              key={`TodoItem.${uniqueId()}`}
              divider={idx !== props.items.length - 1}
              onButtonClick={() => props.onItemRemove(idx)}
              onCheckBoxToggle={() => props.onItemCheck(idx)}
            />
          ))}
        </List>
      </Paper>
    )}
  </div>
));

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()),
  onItemRemove: PropTypes.func,
  onItemCheck: PropTypes.func,
};

TodoList.defaultProps = {
  items: [],
  onItemRemove: () => {},
  onItemCheck: () => {},
};

export default TodoList;
