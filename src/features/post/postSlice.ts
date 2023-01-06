import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
// import { FormValues } from '../../interfaces/form_values';

const setPostSlice = createSlice({
    name: 'post',
    initialState:  {
        id: 0,
        title: "",
        content: "",
        lat: "",
        long: "",
        image_url: "",
        created_at: "",
        updated_at: ""
    },
    reducers: {
        setPost(_state,action:PayloadAction){
            return action.payload;
        }
    }
});

export const { setPost } = setPostSlice.actions;

export const current_post = setPostSlice.reducer;