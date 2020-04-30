import { addQuestionToUser, addAnswerToUser } from "./users"
import { addNewQuestion, addVoteToQuestion } from "./questions"
import { saveQuestion, saveQuestionAnswer } from '../utils/api' 

export function handleAddNewQuestion(optionOneText, optionTwoText, author) {
  return (dispatch) => {
    return saveQuestion({ optionOneText, optionTwoText, author })
    .then(question => {
      dispatch(addNewQuestion(question))
      dispatch(addQuestionToUser(question))
    })
  }
}

export function handleSaveQuestionAnswer(authedUser, qid, answer) {
  return (dispatch) => {
    dispatch(addVoteToQuestion(authedUser, qid, answer))
    dispatch(addAnswerToUser(authedUser, qid, answer))
    return saveQuestionAnswer({ authedUser, qid, answer })
    .catch(error => console.warn('There was an error in submitting result', error))
  }
}