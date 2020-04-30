import { getUsers } from "../utils/api"

export const RECEIVE_USERS = "RECEIVE_USERS"
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER"
export const ADD_ANSWER_TO_USER = "ADD_ANSWER_TO_USER"

function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function getAllUsers() {
  return (dispatch) => {
    return getUsers().then(users => {
      dispatch(receiveUsers(users))
    })
  }
}

export function addQuestionToUser({ id, author}) {
  return {
    type: ADD_QUESTION_TO_USER,
    id,
    author
  }
}

export function addAnswerToUser(authedUser, qid, answer) {
  return {
    type: ADD_ANSWER_TO_USER,
    authedUser,
    qid,
    answer
  }
}