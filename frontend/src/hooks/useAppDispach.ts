import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../init/store';

// Use throughout your app instead of plain `useDispatch`
export const useAppDispatch = () => useDispatch<AppDispatch>();

