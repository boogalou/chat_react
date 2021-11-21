import { IConversations } from './types';

export const START_FETCHING = 'START_FETCHING';
export type ConversationsStartFetchingAction = {
  type: typeof START_FETCHING,
};

export const STOP_FETCHING = 'STOP_FETCHING';
export type ConversationsStopFetchingAction = {
  type: typeof STOP_FETCHING,
};

export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export type ConversationsSuccessAction = {
  type: typeof FETCHING_SUCCESS,
  payload: IConversations[],
};

export const FAIL_FETCHING = 'FAIL_FETCHING';
export type ConversationsFailAction = {
  type: typeof FAIL_FETCHING,
  payload: string;
};

export type ConversationsActionTypes =
  | ConversationsStartFetchingAction
  | ConversationsStopFetchingAction
  | ConversationsSuccessAction
  | ConversationsFailAction