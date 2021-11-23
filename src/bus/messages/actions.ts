import {
  MessagesStartFetchingAction,
  MessagesStopFetchingAction,
  MessagesSuccessAction,
  MessagesFailAction,
  FAIL_FETCHING_MESSAGES,
  FETCHING_SUCCESS_MESSAGES,
  START_FETCHING_MESSAGES,
  STOP_FETCHING_MESSAGES
} from './actionsType';

import { IMessage } from '../../types/apiTypes';


export function startFetchingMsg(): MessagesStartFetchingAction {
  return {
    type: START_FETCHING_MESSAGES,
  };
}

export function stopFetchingMsg(): MessagesStopFetchingAction {
  return {
    type: STOP_FETCHING_MESSAGES,
  };
}

export function successFetchingMsg(payload: IMessage[]): MessagesSuccessAction {
  return {
    type: FETCHING_SUCCESS_MESSAGES,
    payload,
  };
}

export function failFetchingMsg(payload: string): MessagesFailAction {
  return {
    type: FAIL_FETCHING_MESSAGES,
    payload,
  };
}


