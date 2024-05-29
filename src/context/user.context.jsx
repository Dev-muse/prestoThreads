import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';

import { createAction } from '../utils/reducer/reduce.utils'


export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

// using reducer hook instead of state 
const USER_ACTION_TYPES = {
  'SET_CURRENT_USER': 'SET_CURRENT_USER'
}

const INITIAL_STATE = {
  currentUser: null
}

// define reducer
const userReducer = (state, action) => {
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
      throw new Error(`unrecognized type ${type}`)
  }

}


// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {

  // using reducer here to get state and set state
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE)

  console.log('current user obj', currentUser)

  const setCurrentUser = (user) => {
    // this runs the reducer
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))
  }


  const value = { currentUser, setCurrentUser };



  // runs once on component mount
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(
      (user) => {
        if (user) {
          createUserDocumentFromAuth(user)
        }
        //user signed out we store null , if in we store object
        setCurrentUser(user)
      })
    return unsubscribe
  }, [])


  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};