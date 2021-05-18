var initialState = {
    by: 'name',
    value: 1 // increase, -1 decrease
}
var myReducer = (state = initialState, action) => {
    if (action.type === "STATUS") {
        var { by, value } = action.sort;
        return {
            by, 
            value
        }
    }
    return state;
}
export default myReducer