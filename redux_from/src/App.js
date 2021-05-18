import { Component } from 'react';
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import ContactForm from './components/ContactForm';
import {Provider} from 'react-redux';
import configureStore from './redux/configureStore'
// const reducers = {
//   form: formReducer
// }
// const reducer = combineReducers(reducers);
// const store = createStore(reducer);

const store = configureStore();

class App extends Component {
  handleSubmit = () => {
    return null;
  }
  render() {
    return (
      <Provider store = {store}>
        <ContactForm handleSubmit={this.handleSubmit}></ContactForm>
      </Provider>
    );

  }
}

export default App;
