import { configureStore } from '@reduxjs/toolkit';
import ThunkMiddleware from 'redux-thunk';
import memberReducer from '../state/members/memberSlice';

export const store = configureStore({
  reducer: {
    members: memberReducer
  },
  middleware: [ThunkMiddleware],
  preloadedState: {
    members: {
      isLoading: false,
      data: []
    }
  }
});