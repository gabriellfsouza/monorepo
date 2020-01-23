import React, { memo } from 'react';
import {
  TextField, Paper, Button, Grid,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const AddTodo = memo((props) => (
  <Paper style={{ margin: 16, padding: 16 }}>
    <Grid container>
      <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
        <TextField
          placeholder="Add Todo here"
          value={props.inputValue}
          onChange={props.onInputChange}
          onKeyPress={props.onInputKeyPress}
          fullWidth
        />
      </Grid>
      <Grid xs={2} md={1} item>
        <Button
          fullWidth
          color="secondary"
          variant="outlined"
          onClick={props.onButtonClick}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  </Paper>
));

AddTodo.propTypes = {
  inputValue: PropTypes.string,
  onInputChange: PropTypes.func,
  onInputKeyPress: PropTypes.func,
  onButtonClick: PropTypes.func,
};

AddTodo.defaultProps = {
  inputValue: '',
  onInputChange: () => {},
  onInputKeyPress: () => {},
  onButtonClick: () => {},
};

export default AddTodo;
