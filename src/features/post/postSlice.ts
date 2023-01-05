import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../common/store';


const setPostSlice = createSlice({
    name: 'post',
    initialState: {},
    reducers: {
        setPost(_state,action){
            return action.payload;
        }
    }
});

export const { setPost } = setPostSlice.actions;

export const current_post = setPostSlice.reducer;