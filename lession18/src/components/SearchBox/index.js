import { TextField, withStyles } from '@material-ui/core';
import { render } from '@testing-library/react';
import { Component } from 'react';
import styles from './styles';
import PropTypes from 'prop-types';

class SearchBox extends Component {
    render() {
        const { classes, handleChange } = this.props;
        return (
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    autoComplete='off'
                    id="standard-basic"
                    label="Search"
                    onChange={handleChange}
                    className={classes.textField}
                />
            </form>
        );
    }
}
SearchBox.propTypes = {
    classes: PropTypes.object,
    handleChange: PropTypes.func,
};

export default withStyles(styles)(SearchBox);