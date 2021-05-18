import { withStyles } from "@material-ui/core";
import { Component } from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

import styles from './styles';

class TaskItem extends Component {
    render() {
        var { classes, task, status, title } = this.props;
        return (
            <Card key={task.id} className={classes.card}>
                <CardContent>
                    <Grid container justify='space-between'>
                        <Grid item md={8}>
                            <Typography component="h2">
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item md={4}>
                            {status.label}
                        </Grid>
                    </Grid>
                    <p>{task.description}</p>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Fab color="primary" aria-label="edit" size="small">
                        <Icon fontSize='small'>edit_icon</Icon>
                    </Fab>
                    <Fab color="primary" aria-label="edit" size="small">
                        <Icon fontSize = 'small'>delete_icon</Icon>
                    </Fab>
                </CardActions>
            </Card>
        );
    }
};
export default withStyles(styles)(TaskItem);