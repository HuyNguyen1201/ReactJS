import { FormHelperText, InputLabel, Select } from '@material-ui/core';
import PropTypes from 'prop-types';

const renderFromHelper = ({ touched, error }) => {
    if (!(touched && error)) {
        return null;
    } else {
        return <FormHelperText>{touched && error}</FormHelperText>;
    }
};



const renderSelectField = ({
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
}) => (
    <FormControl error={touched && error}>
        <InputLabel htmlFor='age-navtive-simple'>Age</InputLabel>
        <Select
            native
            {...input}
            {...custom}
            inputProps={{
                name: 'age',
                id: 'age-navtive-simple'
            }}>
            {children}
        </Select>
        {renderFromHelper({ touched, error })}
    </FormControl>
);

renderFromHelper.propTypes = {
    touched: PropTypes.bool,
    error: PropTypes.bool
};

renderSelectField.propTypes = {
    label: PropTypes.string,
    input: PropTypes.object,
    meta: PropTypes.object,
    children: PropTypes.object,
    renderFromHelper: PropTypes.object
};
export default renderSelectField;