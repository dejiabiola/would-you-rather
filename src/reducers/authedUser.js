import { AUTHED_USER, LOG_USER_OUT } from "../actions/authedUser";





function authedUser(state = null, action) {
  switch(action.type) {
    case AUTHED_USER: 
      return action.id
    case LOG_USER_OUT:
      return null
    default:
      return state
  }
}


export default authedUser