import produce from 'immer'
import ACTIONS from '../actions'

const initialState = {
  isFetching: false,
  messages: [],
  error: null
}

export default function chatReducer (state = initialState, action) {
  switch (action.type) {
    case ACTIONS.GET_MESSAGES_SUCCESS: {
      const {
        payload: { messages }
      } = action
      return produce(state, draftState => {
        draftState.isFetching = false
        draftState.messages.push(...messages.reverse())
      })
    }
    case ACTIONS.CREATE_MESSAGE_SUCCESS: {
      const {
        payload: { message }
      } = action
      return produce(state, draft => {
        draft.isFetching = false
        draft.messages.push(message)
      })
    }
    case ACTIONS.GET_MESSAGES_ERROR:
    case ACTIONS.CREATE_MESSAGE_ERROR: {
      const {
        payload: { error }
      } = action
      return produce(state, draftState => {
        draftState.error = error
        draftState.isFetching = false
      })
    }
    case ACTIONS.GET_MESSAGES_REQUEST: {
      return produce(state, draftState => {
        draftState.isFetching = true
      })
    }

    default: {
      return state
    }
  }
}
