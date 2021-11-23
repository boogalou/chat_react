import { IConversations } from '../../types/apiTypes';
import {
  ConversationsFailAction,
  ConversationsStartFetchingAction, ConversationsStopFetchingAction, ConversationsActionTypes,
  STOP_FETCHING_CONVERSATION,
  FAIL_FETCHING_CONVERSATION,
  FETCHING_SUCCESS_CONVERSATION,
  START_FETCHING_CONVERSATION, ConversationsSuccessAction, SetCurrentConversation, SET_CURRENT_CONVERSATION,
} from './actionsTypes';

export function startFetching(): ConversationsStartFetchingAction {
  return {
    type: START_FETCHING_CONVERSATION,
  };
}

export function stopFetching(): ConversationsStopFetchingAction {
  return {
    type: STOP_FETCHING_CONVERSATION,
  };
}

export function successFetching(payload: IConversations[]): ConversationsSuccessAction {
  return {
    type: FETCHING_SUCCESS_CONVERSATION,
    payload,
  };
}

export function failFetching(payload: string): ConversationsFailAction {
  return {
    type: FAIL_FETCHING_CONVERSATION,
    payload,
  };
}

export function setCurrentConversation (payload: string): SetCurrentConversation {
  return {
    type: SET_CURRENT_CONVERSATION,
    payload,
  }
}