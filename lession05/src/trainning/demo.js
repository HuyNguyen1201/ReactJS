import { act } from 'react-dom/test-utils';
import { createStore } from 'redux';
import {status, sort} from './actions/index'
import myReducer from './reduces/index'
const store = createStore(myReducer);
console.log('Default: ', store.getState())

// //toggle
// store.dispatch(status());
// console.log('Toggle: ', store.getState())
// by name
store.dispatch(sort({by:'name',value:'-1'}))
console.log('Sort: ', store.getState())
//show actions
