import { configureStore } from '@reduxjs/toolkit';
import copiesReducer from './reducers/copies.reducer';

export const store = configureStore({
  reducer: {
    copies: copiesReducer,
  },
});
  
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;