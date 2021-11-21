import {
  ConversationsActionTypes,
  FAIL_FETCHING,
  FETCHING_SUCCESS,
  START_FETCHING,
  STOP_FETCHING
} from './actionsTypes';
import { IConversations } from './types';


export type ConversationsState = {
  conversations: IConversations[];
  isFetching: boolean;
  error: boolean;
};


const initialState: ConversationsState = {
  conversations: [],
  isFetching: false,
  error: false,
};


export const conversationsListReducer = (state = initialState, action: ConversationsActionTypes): ConversationsState => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: false,
      };

    case STOP_FETCHING:
      return {
        ...state,
        isFetching: false,
        error: false,
      };

    case FETCHING_SUCCESS:
      return {
        ...state,
        conversations: [...action.payload],
        error: false,
      };

    case FAIL_FETCHING:
      return state;

    default:
      const x: never = action;
  }

  return state;
};