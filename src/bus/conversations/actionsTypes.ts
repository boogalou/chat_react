import { IConversations } from '../../types/apiTypes';

export const START_FETCHING_CONVERSATION = 'START_FETCHING_CONVERSATION';
export type ConversationsStartFetchingAction = {
  type: typeof START_FETCHING_CONVERSATION,
};

export const STOP_FETCHING_CONVERSATION = 'STOP_FETCHING_CONVERSATION';
export type ConversationsStopFetchingAction = {
  type: typeof STOP_FETCHING_CONVERSATION,
};

export const FETCHING_SUCCESS_CONVERSATION= 'FETCHING_SUCCESS_CONVERSATION';
export type ConversationsSuccessAction = {
  type: typeof FETCHING_SUCCESS_CONVERSATION,
  payload: IConversations[],
};

export const FAIL_FETCHING_CONVERSATION = 'FAIL_FETCHING_CONVERSATION';
export type ConversationsFailAction = {
  type: typeof FAIL_FETCHING_CONVERSATION,
  payload: string;
};

export const SET_CURRENT_CONVERSATION = 'SET_CURRENT_CONVERSATION';
export type SetCurrentConversation = {
  type: typeof SET_CURRENT_CONVERSATION,
  payload: string;
}

export type ConversationsActionTypes =
  | ConversationsStartFetchingAction
  | ConversationsStopFetchingAction
  | ConversationsSuccessAction
  | ConversationsFailAction
  | SetCurrentConversation