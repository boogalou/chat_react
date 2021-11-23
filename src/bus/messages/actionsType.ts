import { IMessage } from '../../types/apiTypes';


export const START_FETCHING_MESSAGES = 'START_FETCHING_MESSAGES';
export type MessagesStartFetchingAction = {
  type: typeof START_FETCHING_MESSAGES,
};

export const STOP_FETCHING_MESSAGES = 'STOP_FETCHING_MESSAGES';
export type MessagesStopFetchingAction = {
  type: typeof STOP_FETCHING_MESSAGES,
};

export const FETCHING_SUCCESS_MESSAGES = 'FETCHING_SUCCESS_MESSAGES';
export type MessagesSuccessAction = {
  type: typeof FETCHING_SUCCESS_MESSAGES,
  payload: IMessage[],
};

export const FAIL_FETCHING_MESSAGES = 'FAIL_FETCHING_MESSAGES';
export type MessagesFailAction = {
  type: typeof FAIL_FETCHING_MESSAGES,
  payload: string;
};



export type MessagesActionTypes =
  | MessagesStartFetchingAction
  | MessagesStopFetchingAction
  | MessagesSuccessAction
  | MessagesFailAction
