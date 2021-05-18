import React, { Component } from 'react';
import styles from './styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles, Grid, Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as modalActions from './../../actions/modal';
import * as taskActions from './../../actions/task';
import { reduxForm, Field } from 'redux-form';
import renderTextField from '../../components/FormHelper/TextField';
import validate from './validate';
// import renderSelectField from '../../components/FormHelper/Select';
class TaskForm extends Component {

    handleSubmitForm = data => {
        const { taskActionCreators } = this.props;
        const { addTask } = taskActionCreators;
        const { title, description } = data;
        addTask(title, description);
    }
    renderStatusSelection = () => {
        // let xhtml = null;
        // const { taskEditing, classes } = this.props;
        // if (taskEditing && taskEditing.id) {
        //     xhtml = (
        //         <Field
        //             id='status'
        //             label='Trạng thái'
        //             className={classes.select}
        //             name='status'
        //             component={renderSelectField}
        //         >
        //             <option value={'0'}>Ready</option>
        //             <option value={'1'}>In Progress</option>
        //             <option value={'2'}>Completed</option>
        //         </Field>
        //     );
        // }
        // console.log('xhtml running');
        let xhtml = (
            <div>
                <Field name="favoriteColor" component="select">
                    <option></option>
                    <option value="#ff0000">Red</option>
                    <option value="#00ff00">Green</option>
                    <option value="#0000ff">Blue</option>
                </Field>
            </div>
        );
        console.log('a');
        return xhtml;
    }
    render() {
        const { classes, invalid, submitting, modalActionCreators, handleSubmit, taskEditing } = this.props;
        const { hideModal } = modalActionCreators;
        return (
            <form onSubmit={handleSubmit(this.handleSubmitForm)}>
                <Grid container>

                    <Grid item md={12}>
                        <Field
                            id='title'
                            label='Tiêu đề'
                            className={classes.textField}
                            margin='normal'
                            name='title'
                            component={renderTextField}
                        />
                    </Grid>
                    <Grid item md={12}>
                        <Field
                            id="description"
                            // validate={this.required}
                            label="Miêu tả"
                            multiline
                            name='description'
                            rowsMax={4}
                            className={classes.textField}
                            component={renderTextField}
                        />
                    </Grid>
                    <Grid item md={12}>
                        {this.renderStatusSelection}
                        <h3>de,p</h3>
                    </Grid>
                    <Grid item md={12}>
                        <Box display='flex' flexDirection='row-reverse' mt={2}>
                            <Box ml={1}>
                                <Button variant='contained' onClick={hideModal}>
                                    Hủy bỏ
                    </Button>
                            </Box>
                            <Button disabled={invalid || submitting} variant='contained' color='primary' type='submit'>
                                Lưu lại
                    </Button>
                        </Box>
                    </Grid>
                </Grid>

            </form>

        );
    }
};

TaskForm.propTypes = {
    classes: PropTypes.object,
    modalActionCreators: PropTypes.shape({
        hideModal: PropTypes.func
    }),
    handleSubmit: PropTypes.func,
    invalid: PropTypes.bool,
    submitting: PropTypes.bool,
    taskActionCreators: PropTypes.shape({
        addTask: PropTypes.func
    }),
    taskEditing: PropTypes.object
};

const mapStateToProps = state => {
    return {
        taskEditing: state.task.taskEditing,
        initialValues: {
            title: state.task.taskEditing ? state.task.taskEditing.title : null,
            description: state.task.taskEditing ? state.task.taskEditing.description : null
        }
    };
};

const mapDispatchToProps = dispatch => {
    return {
        modalActionCreators: bindActionCreators(modalActions, dispatch),
        taskActionCreators: bindActionCreators(taskActions, dispatch)
    };
};
const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);
const FORM_NAME = 'TASK_MANAGEMENT';
const withReduxFrom = reduxForm({
    form: FORM_NAME,
    validate
});
export default compose(
    withStyles(styles),
    withConnect,
    withReduxFrom
)(TaskForm);