import { Dispatch } from 'react';

import { ApiService } from '../../api/ApiService';
import { MessagesActionTypes } from './actionsType';
import { startFetchingMsg, stopFetchingMsg, successFetchingMsg } from './actions';


export const fetchMessages = (dialogID: string) => async (useAppDispatch: Dispatch<MessagesActionTypes>) => {
  useAppDispatch(startFetchingMsg());
  try {
    const response = await ApiService.getDialogById(dialogID);
    console.log(response.data);
    useAppDispatch(successFetchingMsg(response.data));
  } catch (e) {

    console.log('fail');
  }
  useAppDispatch(stopFetchingMsg());
};
