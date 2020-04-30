import { getQuestions } from "../utils/api"

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION'
export const ADD_VOTE_TO_QUESTION = 'ADD_VOTE_TO_QUESTION'


function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function getAllQuestions() {
  return (dispatch) => {
    return getQuestions()
    .then(questions => {
      dispatch(receiveQuestions(questions))
    })
  }
}

export function addNewQuestion(question) {
  return {
    type: ADD_NEW_QUESTION,
    question
  }
}

export function addVoteToQuestion(authedUser, qid, answer) {
  return {
    type: ADD_VOTE_TO_QUESTION,
    authedUser,
    qid,
    answer
  }
}
