import { configureStore } from '@reduxjs/toolkit';
import reducers from '../state/reducers';
import ThunkMiddleware from 'redux-thunk';

export const store = configureStore({
  reducer: reducers,
  middleware: [ThunkMiddleware],
  preloadedState: {
    members: {
      isLoading: true,
      data: [],
      error: ''
    },
    
  }
});

