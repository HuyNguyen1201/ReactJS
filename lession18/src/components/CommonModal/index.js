import { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Clear';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import Modal from '@material-ui/core/Modal';
import * as modalActions from '../../actions/modal';
import shape from '@material-ui/core/styles/shape';

class CommonModal extends Component {
    render() {
        const { classes, open, title, component, modalActionCreators } = this.props;
        const { hideModal } = modalActionCreators;
        return (
            <Modal
                open={open}
                onClose={hideModal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className={classes.modal}>
                    <div className={classes.header}>
                        <span className={classes.title}>
                            {title}
                        </span>
                        <CloseIcon className={classes.icon} onClick={hideModal} />
                    </div>
                    <div className={classes.content}>
                        {component}
                    </div>

                </div>
            </Modal>

        );
    };
};
CommonModal.propTypes = {
    classes: PropTypes.object,
    open: PropTypes.bool,
    onClose: PropTypes.func,
    title: PropTypes.string,
    component: PropTypes.object,
    modalActionCreators: PropTypes.shape({
        hideModal: PropTypes.func
    })

};

const mapStateToProps = state => {
    return {
        open: state.modal.showModal,
        component: state.modal.component,
        title: state.modal.title
    };
};
const mapDispatchToProps = dispatch => {
    return {
        modalActionCreators: bindActionCreators(modalActions, dispatch)
    };
};
const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);
export default compose(
    withStyles(styles),
    withConnect
)(CommonModal);