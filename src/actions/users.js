import { getUsers } from "../utils/api"
import { showLoading, hideLoading } from 'react-redux-loading';

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
  showLoading()
  return (dispatch) => {
    return getUsers().then(users => {
      dispatch(receiveUsers(users))
      hideLoading()
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