import { ApiService } from '../../api/urlConfig';
import { startFetching, stopFetching, successFetching } from './actions';
import { Dispatch } from 'react';
import { ConversationsActionTypes } from './actionsTypes';


export const getConversations = () => async (useAppDispatch: Dispatch<ConversationsActionTypes>) => {
  useAppDispatch(startFetching());
  try {
    const response = await ApiService.getMembers();
    console.log(response.data)
    useAppDispatch(successFetching(response.data));
  } catch (e) {

    console.log('fail')
  }
  useAppDispatch(stopFetching());
};
