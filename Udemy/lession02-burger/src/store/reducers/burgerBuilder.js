import * as actionTypes from './../actions/actionTypes'
import { updateObject } from './../../shared/utility'


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}
const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENTS: {
            const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
            const updatedIngredients = updateObject(state.ingredients, updatedIngredient)
            const updatedState = {
                ingredients: updatedIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
                building: true
            }
            return updateObject(state, updatedState)
        }
        case actionTypes.REMOVE_INGREDIENTS: {
            const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 < 0 ? 0 : state.ingredients[action.ingredientName] - 1 }
            const updatedIngredients = updateObject(state.ingredients, updatedIngredient)
            const updatedState = {
                ingredients: updatedIngredients,
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
                building: true
            }
            return updateObject(state, updatedState)
        }
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return updateObject(state, { error: true })
        case actionTypes.SET_INGREDIENTS:
            return updateObject(state, {
                ingredients: action.ingredients,
                totalPrice: 4,
                building: false
            })

        default:
            break;
    }
    return state
}
export default reducer