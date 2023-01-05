import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { current_post } from '../features/post/postSlice';

const rootReducer = combineReducers({
  current_post 
})

export const store = configureStore({
  reducer: rootReducer
})



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;