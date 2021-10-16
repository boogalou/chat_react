import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppState } from '../init/store';

// Use throughout your app instead of plain `useSelector`
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;