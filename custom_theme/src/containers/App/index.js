import { Component } from 'react';
// import React
import styles from './styles';
import TaskBoard from './../TaskBoard/index';
import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import theme from './../../commons/index';

class App extends Component {
  render() {
    var { classes } = this.props;
    return (
      <ThemeProvider theme ={theme}>
          <TaskBoard></TaskBoard>
      </ThemeProvider>
    );
  }
}


export default withStyles(styles)(App);
