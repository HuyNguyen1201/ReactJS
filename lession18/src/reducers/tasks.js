import { toastError } from '../helpers/toastHelper';
import * as taskConstants from './../constants/task';

const initialState = {
    listTask: [],
    taskEditing: null
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case taskConstants.FETCH_TASK:
            return {
                ...state,
                listTask: []
            };
        case taskConstants.FETCH_TASK_SUCCESS:
            const { data } = action.payload;
            return {
                ...state,
                listTask: data
            };
        case taskConstants.FETCH_TASK_FAILDED: {
            const { error } = action.payload;
            toastError(error);
            return {
                ...state,
                listTask: []
            };
        }
        case taskConstants.FILTER_TASK_SUCCESS:
            // const { data } = action.payload;
            return {
                ...state,
                listTask: data,
            };
        case taskConstants.ADD_TASK:
            return {
                ...state,
            };
        case taskConstants.ADD_TASK_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                listTask: [data].concat(state.listTask)
            };
        }
        case taskConstants.ADD_TASK_FAILDED: {
            const { error } = action.payload;
            toastError(error);
            return {
                ...state,
            };
        };
        case taskConstants.SET_TASK_EDITING:{
            const {task} = action.payload;
            return {
                ...state,
                taskEditing: task
            };
        }
        default:
            return {
                ...state
            };
    }
};
export default reducer;