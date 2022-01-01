import { configureStore } from '@reduxjs/toolkit';
import reducers from '../state/reducers';
import ThunkMiddleware from 'redux-thunk';
import asyncDispatchMiddleware from '../state/asyncDispatch';

export const store = configureStore({
  reducer: reducers,
  middleware: [ThunkMiddleware, asyncDispatchMiddleware],
  preloadedState: {
    members: {
      isLoading: true,
      data: [],
      error: ''
    }
  }
});