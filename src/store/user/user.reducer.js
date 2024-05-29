// using reducer hook instead of state 
const USER_ACTION_TYPES = {
    'SET_CURRENT_USER': 'SET_CURRENT_USER'
}

const INITIAL_STATE = {
    currentUser: null
}

// define reducer
export const userReducer = (state = INITIAL_STATE, action) => {
    console.log('dispatched')
    console.log('action', action)
    const { type, payload } = action

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            state
    }

}
