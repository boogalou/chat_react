import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { authReducer } from '../bus/auth/reducer';
import thunk from 'redux-thunk';
import { conversationsListReducer } from '../bus/conversationsList/reducer';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    conversations: conversationsListReducer,
  },
  middleware: [thunk],
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;
