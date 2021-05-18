import { withStyles } from '@material-ui/core';
import { Component } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import TaskItem from './../TaskItem/index';
import PropTypes from 'prop-types';

class TaskList extends Component {
    render() {
        var { classes, tasks, status,onClickEdit } = this.props;
        return (
            <Grid  item md={4}>
                <Box mt={2} mb={2}>
                    <div className={classes.status}>
                        {status.label}
                    </div>
                </Box>
                <div className={classes.wrapperListTask}>
                    {
                        tasks.map((task, index) => {
                            const { title } = task;
                            return (
                                <TaskItem
                                    task ={task} 
                                    title={title}
                                    status = {status}
                                    key = {task.id}
                                    onClickEdit ={()=>onClickEdit(task)}
                                />
                            );
                        })
                    }
                </div>
            </Grid>

        );
    }
}
TaskList.propTypes = {
    classes: PropTypes.object,
    tasks: PropTypes.object,
    status: PropTypes.object,
    tasks: PropTypes.object,
    onClickEdit: PropTypes.func
};
export default withStyles(styles)(TaskList);