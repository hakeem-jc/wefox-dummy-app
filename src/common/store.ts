import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { current_post, posts, refresh_posts } from "../features/post/postSlice";
import { form_type } from "../features/form/formSlice";
import { is_open, modal_type } from '../features/modal/modalSlice';

const rootReducer = combineReducers({
  current_post,
  form_type,
  posts,
  refresh_posts,
  is_open,
  modal_type
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
