import { RECEIVE_QUESTIONS, ADD_NEW_QUESTION, ADD_VOTE_TO_QUESTION } from "../actions/questions"



function questions(state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS: 
      return {
        ...state,
        ...action.questions
      }
    case ADD_NEW_QUESTION:
      const { question } = action
      return {
        ...state,
        [question.id]: question
      }
    case ADD_VOTE_TO_QUESTION:
      const { authedUser, qid, answer } = action
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser])
          }
        }
      }
    default:
      return state;
  }
}


export default questions