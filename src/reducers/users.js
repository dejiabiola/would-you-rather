import { RECEIVE_USERS, ADD_QUESTION_TO_USER } from "../actions/users";



function users(state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case ADD_QUESTION_TO_USER:
      const { id, author } = action
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat([id])
        }
      }
    default:
      return state
  }
}


export default users