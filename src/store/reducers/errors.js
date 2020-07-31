import * as actionTypes from '../actions/actionTypes'
import { updatedObject } from '../utility'

const initialState = {
    errors: []
}

const addError = (state, action) => {
    if(!state.errors.includes(action.message)){
        return updatedObject(state, {
            errors: [ ...state.errors, action.message]
        })
    } else return state
}

const removeError = (state, action) => {
    return updatedObject(state, {
        errors: state.errors.filter( err => err !== action.message)
    })
}

const clearErrors = (state, action) => {
    return updatedObject(state, {errors:  [] })
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_ERROR: return addError(state, action);
        case actionTypes.REMOVE_ERROR: return removeError(state, action);
        case actionTypes.CLEAR_ERRORS: return clearErrors(state, action)
        default: return state
    }
}

export default reducer

