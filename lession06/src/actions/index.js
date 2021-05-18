import * as types from './../constants/ActionTypes'
export const listAll = ()=>{
    return {
        type: types.LIST_ALL,

    }
}
export const addTask = (task)=>{
    return {
        type: types.ADD_TASK,
        task
    }
}
export const delTask = (index) =>{
    return {
        type: types.DEL_TASK,
        index
    }
}
export const statusEdit = (index, isEdit)=>{
    return {
        type: types.STATUS_EDIT,
        isEdit,
        index,
    }
}
export const editTask = (index)=>{
    return {
        type: types.EDIT_TASK,
        index,
    }
}