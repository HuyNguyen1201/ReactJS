import * as types from './../constants/ActionTypes'
var initialState = {
    isEdit: false,
    index: -1
}
var myReducer = (state = initialState, action)=>{
    switch(action.type){
        case types.STATUS_EDIT:
            console.log('status edit')
            return {
                isEdit: action.isEdit,
                index:action.index
            }

        default:
            return state
    }
}
export default myReducer