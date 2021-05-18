import { withStyles } from "@material-ui/core";
import { Component } from "react";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import TaskItem from './../TaskItem/index';

class TaskList extends Component {
    render() {
        var { classes, tasks, status } = this.props;
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
                                />
                            );
                        })
                    }
                </div>
            </Grid>

        );
    }
}
export default withStyles(styles)(TaskList);