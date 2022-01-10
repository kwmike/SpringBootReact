import { configureStore } from '@reduxjs/toolkit';
import ThunkMiddleware from 'redux-thunk';
import memberReducer from '../state/members/memberSlice';
import shipReducer from '../state/ships/shipSlice';

export const store = configureStore({
  reducer: {
    members: memberReducer,
    ships: shipReducer
  },
  middleware: [ThunkMiddleware],
  preloadedState: {
    members: {
      isLoading: false,
      data: []
    },
    ships: {
      isLoading: false,
      data: []
    }
  }
});