import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/button';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from '../../constants';
import TaskList from '../../components/TaskList';
import TaskFrom from '../TaskForm/index';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as taskActions from './../../actions/task';
import * as modalActions from './../../actions/modal';
import SearchBox from './../../components/SearchBox/index';

class TaskBoard extends Component {
  state = {
    open: false
  }
  handleEditTask = (task)=> {

    const {taskActionCreators} = this.props;
    const {setTaskEditing} = taskActionCreators;
    const { modalActionCreators } = this.props;
    const { showModal, changeModalContent, changeModalTitle } = modalActionCreators;
    setTaskEditing(task);
    showModal();
    changeModalTitle('Cập nhật công việc');
    changeModalContent(<TaskFrom />);
  }
  renderBoard() {
    var { listTask } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {
          STATUSES.map((status, index) => {
            const taskFiltered = listTask.filter(task => Number(task.status) === status.value);
            return (
              <TaskList key={status.value} tasks={taskFiltered} status={status} onClickEdit={this.handleEditTask}></TaskList>
            );
          })
        }
      </Grid>);
    return xhtml;
  }

  handleClose = () => {
    this.setState({
      open: false
    });
  }
  openForm = () => {
    const { modalActionCreators } = this.props;
    const {taskActionCreators} = this.props;
    const {setTaskEditing} = taskActionCreators;
    const { showModal, changeModalContent, changeModalTitle } = modalActionCreators;
    showModal();
    setTaskEditing(null);
    changeModalTitle('Thêm mới công việc');
    changeModalContent(<TaskFrom />);
  }
  componentDidMount() {
    const { taskActionCreators } = this.props;
    const { fetchListTask } = taskActionCreators;
    fetchListTask();
  }
  handleFilter = e => {
    const { value } = e.target;
    const { taskActionCreators } = this.props;
    const { filterTask } = taskActionCreators;
    filterTask(value);
  }
  renderSearchBox = () => {
    let xhtml = null;
    xhtml = (
      <SearchBox handleChange={this.handleFilter}></SearchBox>
    );

    return xhtml;
  }
  render() {
    var { classes } = this.props;
    return (
      <Fragment>
        <div className={classes.taskboard}>
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            onClick={this.loadData}
            style={{
              marginRight: 20,
            }}
          >
            Load data
          </Button>
          <Button variant='contained' color='primary' className={classes.button} onClick={this.openForm}>
            <AddIcon></AddIcon>
          Thêm mới công việc
          </Button>
        </div>
        {this.renderSearchBox()}
        {this.renderBoard()}
      </Fragment>
    );
  }
}
TaskBoard.propTypes = {
  classes: PropTypes.object,
  taskActionCreators: PropTypes.shape({
    fetchListTask: PropTypes.func,
    filterTask: PropTypes.func,
    setTaskEditing: PropTypes.func
  }),
  listTask: PropTypes.array,
  modalActionCreators: PropTypes.shape({
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    changeModalTitle: PropTypes.func,
    changeModalContent: PropTypes.func,
  })
};

const mapStateToProps = state => {
  return {
    listTask: state.task.listTask
  };
};
const mapDispatchToProps = dispatch => {
  return {
    taskActionCreators: bindActionCreators(taskActions, dispatch),
    modalActionCreators: bindActionCreators(modalActions, dispatch)
  };
};


export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskBoard));
