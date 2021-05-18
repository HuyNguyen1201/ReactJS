import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/button';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from '../../constants';
import TaskList from '../../components/TaskList';
import TaskFrom from '../../components/TaskForm/index';
const listTask = [
  {
    id: 1,
    title: "Read book",
    description: "Read material uid book",
    status: 0
  },
  {
    id: 2,
    title: "Play football",
    description: "Read material uidss book",
    status: 1
  },
  {
    id: 3,
    title: "Play game",
    description: "Read material uis sbook",
    status: 2
  },
];
class TaskBoard extends Component {
  state = {
    open: false
  }
  renderBoard() {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {
          STATUSES.map((status, index) => {
            const taskFiltered = listTask.filter(task => task.status === status.value);
            return (
              <TaskList key={status.value} tasks={taskFiltered} status={status}></TaskList>
            );
          })
        }
      </Grid>);
    return xhtml;
  }
  handleClose=()=>{
    this.setState({
      open: false
    });
  }
  openForm = ()=>{
    this.setState({
      open:true
    });
  }
  renderForm() {
    const {open} = this.state;
    let xhtml = null;
    xhtml = (
      <TaskFrom open= {open} onClose = {this.handleClose}></TaskFrom>
    );
    return xhtml;
  }
  render() {
    var { classes } = this.props;
    return (
      <Fragment>
        <div className={classes.taskboard}>
          <Button variant='contained' color='primary' className={classes.button} onClick ={this.openForm}>
            <AddIcon></AddIcon>
          Add new tasks
        </Button>
        </div>
        {this.renderBoard()}
        {this.renderForm()}
      </Fragment>
    );
  }
}


export default withStyles(styles)(TaskBoard);
