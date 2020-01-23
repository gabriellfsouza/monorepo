import React, { memo } from 'react';

import {
  ListItem,
  Checkbox,
  IconButton,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';

import PropTypes from 'prop-types';

const TodoListItem = memo((props) => (
  <ListItem divider={props.divider}>
    <Checkbox
      onClick={props.onCheckBoxToggle}
      checked={props.checked}
      disableRipple
    />
    <ListItemText primary={props.text} />
    <ListItemSecondaryAction>
      <IconButton aria-label="Delete Todo" onClick={props.onButtonClick}>
        <DeleteOutlined />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
));

TodoListItem.propTypes = {
  divider: PropTypes.bool,
  onCheckBoxToggle: PropTypes.func,
  checked: PropTypes.bool,
  text: PropTypes.string,
  onButtonClick: PropTypes.func,
};

TodoListItem.defaultProps = {
  divider: undefined,
  onCheckBoxToggle: () => {},
  checked: false,
  text: undefined,
  onButtonClick: () => {},
};

export default TodoListItem;
