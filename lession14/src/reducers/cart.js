import * as Types from './../constants/ActionType'

var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];

const cart = (state = initialState, action) => {
    var { product, quantity } = action;
    var index = -1
    switch (action.type) {
        case Types.ADD_TO_CARD:
            index = findIndex(state, product);

            if (index === -1) {
                state.push({
                    product,
                    quantity
                });
            }
            else {
                state[index].quantity += 1;
            }
            localStorage.setItem("CART", JSON.stringify(state))
            return [...state]
        case Types.DELETE_PRODUCT_IN_CART:
            index = findIndex(state, product);
            if (index != -1) {
                state.splice(index, 1);
            }
            localStorage.setItem("CART", JSON.stringify(state))
            return [...state]
        case Types.UPDATE_PRODUCT_IN_CART:
            index = findIndex(state, product);
            if (index !== -1) {
                state[index].quantity = quantity;
            }
            localStorage.setItem("CART", JSON.stringify(state))
            return [...state]
        default: return [...state]
    }
}
function findIndex(state, product) {
    for (var i = 0; i < state.length; i++) {
        if (state[i].product.name === product.name) {
            return i
        }
    }
    return -1;
}
export default cart