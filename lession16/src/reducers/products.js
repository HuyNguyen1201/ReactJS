import * as Types from './../constants/ActionTypes'
var initialState = [
    {
        id: 1,
        name: 'Iphone 6',
        price: 400,
        status: true
    },
    {
        id: 2,
        name: 'Samsung s7',
        price: 300,
        status: false
    },
    {
        id: 3,
        name: 'Oppo f1s',
        price: 120,
        status: true
    },
];
var findIndex = (id, state)=>{
    for(var i = 0 ; i < state.length;i++){
        if(state[i].id === id){
            return i
        }
    }
    return -1
}
const products = (state = initialState, action)=>{
    var {id, product} = action
    switch(action.type){
        case Types.FETCH_PRODUCTS:
            return action.products
        case Types.DELETE_PRODUCT:
            var index = findIndex(id, state)
            if(index !== -1){
                state.splice(index, 1)
            }
            return [...state]
        case Types.ADD_PRODUCT:
            state.push(action.product)
            return [...state]
        case Types.UPDATE_PRODUCT:
            var index = findIndex(id, state)
            if(index !== -1){
                state[index] = product
            }
            return [...state]
        default:
            return [...state ]
    }
}
export default products