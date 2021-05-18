import { Component } from 'react';
import styles from './styles';
import TaskBoard from './../TaskBoard/index';
import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import theme from './../../commons/Theme/index';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import configureStore from './../../redux/configureStore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from '../../components/GlobalLoading';
import CommonModal from '../../components/CommonModal';



const store = configureStore();

class App extends Component {
  render() {
    var { classes } = this.props;
    return (
      <Provider store={store}>
        <GlobalLoading></GlobalLoading>
        <ThemeProvider theme={theme}>
          <CommonModal/>
          <TaskBoard></TaskBoard>
        </ThemeProvider>
        <ToastContainer />
      </Provider>
    );
  }
}
App.propTypes = {
  classes: PropTypes.object
};


export default withStyles(styles)(App);
