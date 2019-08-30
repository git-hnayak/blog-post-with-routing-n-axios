import * as Actions from '../actions/actionTypes';


const initialSignupFormValues = {
    firstName: 'Hrushikesh',
    lastName: '',
    email: 'hnahak@gmail.com'
}

const initialState = {
    signupFormValues: {
       ...initialSignupFormValues
    }
}

const signupReducer = (state = initialState, action) => {
    switch(action.type) {
        case Actions.SUBMIT_SIGNUP:
            console.log('Form Submit Payload', action.payload);
            return {
                ...state,
                signupFormValues: action.payload
            }
        case Actions.SUBMIT_SIGNUP_TO_REMOTE:
            const newState = Object.assign({}, state);
            newState.signupFormValues = action.payload;
            return newState;
        case Actions.RESET_SIGNUP:
            return {
                ...state,
                signupFormValues: {...initialSignupFormValues}
            }
        case Actions.CHANGE_SIGNUP:
            console.log('Form Change Payload', action.payload);
            return {
                ...state,
                signupFormValues: action.payload
            }
    }

    return state;
}

export default signupReducer;