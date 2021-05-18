import * as taskApis from './../apis/task';
import * as taskConstants from './../constants/task';


export const fetchListTask = (params = {})=>{
    return {
        type: taskConstants.FETCH_TASK,
        payload:{
            params
        }
    };
};
export const fetchListTaskSuccess = (data) => {
    return {
        type: taskConstants.FETCH_TASK_SUCCESS,
        payload: {
            data    
        }
    };
};
export const fetchListTaskFailded = (error) => {
    return {
        type: taskConstants.FETCH_TASK_FAILDED,
        payload: {
            error
        }

    };
};

export const filterTask = keyword =>{
    return {
        type: taskConstants.FILTER_TASK,
        payload:{
            keyword
        }
    };
};

export const filterTaskSuccess = data =>{
    return {
        type: taskConstants.FETCH_TASK_SUCCESS,
        payload:{
            data
        }
    };
};

export const addTask = (title, description)=>{
    return {
        type: taskConstants.ADD_TASK,
        payload:{
            title,
            description
        }
    };
};
export const addTaskSuccess = (data) => {
    return {
        type: taskConstants.ADD_TASK_SUCCESS,
        payload: {
            data    
        }
    };
};
export const addTaskFailded = (error) => {
    return {
        type: taskConstants.ADD_TASK_FAILDED,
        payload: {
            error
        }

    };
};
export const setTaskEditing = (task)=>{
    return {
        type: taskConstants.SET_TASK_EDITING,
        payload:{
            task
        }
    };
};


export const updateTask = (title, description)=>{
    return {
        type: taskConstants.UPDATE_TASK,
        payload:{
            title,
            description
        }
    };
};
export const updateTaskSuccess = (data) => {
    return {
        type: taskConstants.UPDATE_TASK_SUCCESS,
        payload: {
            data    
        }
    };
};
export const updateTaskFailded = (error) => {
    return {
        type: taskConstants.UPDATE_TASK_FAILDED,
        payload: {
            error
        }

    };
};