import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from './_DATA'


export function getQuestions() {
  return _getQuestions()
}

export function getUsers() {
  return _getUsers()
}

export function saveQuestion(question) {
  return _saveQuestion(question)
}

export function saveQuestionAnswer({ authedUser, qid, answer }) {
  return _saveQuestionAnswer({ authedUser, qid, answer })
}