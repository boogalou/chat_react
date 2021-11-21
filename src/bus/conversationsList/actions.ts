import { IConversations } from './types';
import {
  ConversationsFailAction,
  ConversationsStartFetchingAction, ConversationsStopFetchingAction, ConversationsActionTypes,
  STOP_FETCHING,
  FAIL_FETCHING,
  FETCHING_SUCCESS,
  START_FETCHING, ConversationsSuccessAction,
} from './actionsTypes';

export function startFetching(): ConversationsStartFetchingAction {
  return {
    type: START_FETCHING,
  };
}

export function stopFetching(): ConversationsStopFetchingAction {
  return {
    type: STOP_FETCHING,
  };
}

export function successFetching(payload: IConversations[]): ConversationsSuccessAction {
  return {
    type: FETCHING_SUCCESS,
    payload,
  };
}

export function failFetching(payload: string): ConversationsFailAction {
  return {
    type: FAIL_FETCHING,
    payload,
  };
}