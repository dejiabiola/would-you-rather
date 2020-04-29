import { saveQuestion } from "../utils/api"
import { addQuestionToUser } from "./users"

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

function addNewQuestion(question) {
  return {
    type: ADD_NEW_QUESTION,
    question
  }
}

export function handleAddNewQuestion(optionOneText, optionTwoText, author) {
  console.log("details are", optionOneText, optionTwoText, author)
  return (dispatch) => {
    return saveQuestion({ optionOneText, optionTwoText, author })
    .then(question => {
      dispatch(addNewQuestion(question))
      dispatch(addQuestionToUser(question))
    })
  }
}