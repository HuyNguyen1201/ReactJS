import * as actionTypes from './actionTypes'
import axios from './../../axios-orders'
export const addIngredient = (ingName) => {
    return {
        type: actionTypes.ADD_INGREDIENTS,
        ingredientName: ingName
    }
}
export const removeIngredient = (ingName) => {
    return { type: actionTypes.REMOVE_INGREDIENTS, ingredientName: ingName }
}
export const fetchIngredientFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
}
export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
}
export const initIngredients = () => {
    return (dispatch) => {
        axios.get('https://react-my-burger-a3a9d-default-rtdb.firebaseio.com/ingredients.json')
            .then(resp => {
                dispatch(setIngredients(resp.data))
            })
            .catch(error => {
                dispatch(fetchIngredientFailed())
            });
    }
}