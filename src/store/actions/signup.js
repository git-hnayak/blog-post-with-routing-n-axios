import * as Actions from './actionTypes';

//Action creaters: usefull for both synctonous/ asynchrounous operations
export const doSignup = (val) => {
    return {
        type: Actions.SUBMIT_SIGNUP,
        payload: val
    }
}

export const changeSignup = (val) => {
    return {
        type: Actions.CHANGE_SIGNUP,
        payload: val
    }
}

export const resetSignup = () => {
    return {
        type: Actions.RESET_SIGNUP
    }
}

export const multiSync = (val) => {
    return {
        type: Actions.MULTIPLY,
        val
    }
}

export const multi = (val) => {
    //Doing asynchronous operations with the help of redux thunk middleware.
    return (dispatch) => {
        setTimeout(() => {
            dispatch(multiSync(val));
        }, 2000)
    }
}