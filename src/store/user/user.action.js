import { createAction } from '../../utils/reducer/reduce.utils'
import {USER_ACTION_TYPES } from './user.types'


// action creator to store data 
export const setCurrentUser = (user) => {
  // this runs the reducer
  // INPUT TYPE AND PAYLOAD 
 return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
}
 