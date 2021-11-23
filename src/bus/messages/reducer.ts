import { IMessage } from '../../types/apiTypes';
import {
  FAIL_FETCHING_MESSAGES,
  FETCHING_SUCCESS_MESSAGES,
  MessagesActionTypes,
  START_FETCHING_MESSAGES,
  STOP_FETCHING_MESSAGES }
  from './actionsType';


export type MessagesState = {
  messages: IMessage[];
  isFetching: boolean;
  error: boolean;
};


const initialState: MessagesState = {
  messages: [],
  isFetching: false,
  error: false,
};


export const messagesReducer = (state = initialState, action: MessagesActionTypes): MessagesState => {
  switch (action.type) {
    case START_FETCHING_MESSAGES:
      return {
        ...state,
        isFetching: true,
        error: false,
      };

    case STOP_FETCHING_MESSAGES:
      return {
        ...state,
        isFetching: false,
        error: false,
      };

    case FETCHING_SUCCESS_MESSAGES:
      return {
        ...state,
        messages: [...action.payload],
        error: false,
      };

    case FAIL_FETCHING_MESSAGES:
      return state;

    default:
      const x: never = action;
  }

  return state;
};