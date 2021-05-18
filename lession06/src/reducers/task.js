import * as types from './../constants/ActionTypes'
var initialState = [
    { name: 'Nguyen Van A', status: 'active' },
    { name: 'Nguyen Van B', status: 'active' }
];

var myReducer = (state = initialState, action) => {
    switch (action.type) { 
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            return [...state, action.task]
        case types.DEL_TASK:
            state.splice(action.index, 1);
            return [...state]
        default: return state
    }
}
export default myReducer