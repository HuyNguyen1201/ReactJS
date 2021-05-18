import React, { Component } from 'react';
import {withStyles} from '@material-ui/core'
import styles from './styles'
class TaskBoard extends Component {
    render() {
        const {classes} = this.props
        return (
           <div className = {classes.taskboard}>
               <div className= {classes.shape}>React JS</div>
               <div className= {classes.shape}>Angular JS</div>
           </div>
        );
    }
}
export default withStyles(styles)(TaskBoard);
