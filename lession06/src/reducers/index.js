import {combineReducers} from 'redux'
import tasks from './task'
import status from './status'
const myReducer = combineReducers({
    tasks,status
})
export default myReducer