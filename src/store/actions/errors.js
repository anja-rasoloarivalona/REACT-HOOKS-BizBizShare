import * as actionTypes from './actionTypes'

export const addError = message => {
    return {
        type: actionTypes.ADD_ERROR,
        message
    }
}

export const removeError = message => {
    return {
        type: actionTypes.REMOVE_ERROR,
        message
    }
}

export const clearErrors = () => {
    return {
        type: actionTypes.CLEAR_ERRORS
    }
}