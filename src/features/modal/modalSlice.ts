import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const setIsOpenSlice = createSlice({
    name: 'is_open',
    initialState: false,
    reducers: {
        setIsOpen(_state,action:PayloadAction<boolean>){
            return action.payload;
        }
    }
});

const setModalTypeSlice = createSlice({
    name: 'modal_type',
    initialState: '',
    reducers: {
        setModalType(_state,action:PayloadAction<string>){
            return action.payload;
        }
    }
});

// TODO - Add error modal

export const { setIsOpen } = setIsOpenSlice.actions;
export const { setModalType } = setModalTypeSlice.actions;

export const is_open = setIsOpenSlice.reducer;
export const modal_type = setModalTypeSlice.reducer;