import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import styles from './styles'
import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles'
import TaskBoard from './../Taskboard/index'
import theme from './../../commons/index'

class App extends Component {
    render() {
        const { classes } = this.props;
        console.log('props: ', this.props)
        return (
            <ThemeProvider theme ={theme}>
                <TaskBoard></TaskBoard>
            </ThemeProvider>
        );
    }
}
// ReactDOM.render(<App />, document.querySelector('#app'));
export default withStyles(styles)(App);
