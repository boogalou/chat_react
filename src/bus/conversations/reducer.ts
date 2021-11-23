import {
  ConversationsActionTypes,
  FAIL_FETCHING_CONVERSATION,
  FETCHING_SUCCESS_CONVERSATION, SET_CURRENT_CONVERSATION,
  START_FETCHING_CONVERSATION,
  STOP_FETCHING_CONVERSATION
} from './actionsTypes';
import { IConversations } from '../../types/apiTypes';


export type ConversationsState = {
  conversations: IConversations[];
  currentConversation: null | string;
  isFetching: boolean;
  error: boolean;
};


const initialState: ConversationsState = {
  conversations: [],
  currentConversation: null,
  isFetching: false,
  error: false,
};


export const conversationsListReducer = (state = initialState, action: ConversationsActionTypes): ConversationsState => {
  switch (action.type) {
    case START_FETCHING_CONVERSATION:
      return {
        ...state,
        isFetching: true,
        error: false,
      };

    case STOP_FETCHING_CONVERSATION:
      return {
        ...state,
        isFetching: false,
        error: false,
      };

    case FETCHING_SUCCESS_CONVERSATION:
      return {
        ...state,
        conversations: [...action.payload],
        error: false,
      };

    case SET_CURRENT_CONVERSATION:
      return {
        ...state,
        currentConversation: action.payload,
      }

    case FAIL_FETCHING_CONVERSATION:
      return state;

    default:
      const x: never = action;
  }

  return state;
};