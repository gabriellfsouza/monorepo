import React, { memo } from 'react';
import {
  AppBar, Toolbar, Typography, Paper,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const Layout = memo((props) => (
  <Paper
    elevation={0}
    style={{ padding: 0, margin: 0, backgroundColor: '#fafafa' }}
  >
    <AppBar color="primary" position="static" style={{ height: 64 }}>
      <Toolbar style={{ height: 64 }}>
        <Typography color="inherit">TODO APP</Typography>
      </Toolbar>
    </AppBar>
    {props.children}
  </Paper>
));

Layout.propTypes = {
  children: PropTypes.oneOfType(PropTypes.element, PropTypes.string),
};

Layout.defaultProps = {
  children: undefined,
};

export default Layout;
