import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { FormType } from '../../interfaces/form_values';

const setFormTypeSlice = createSlice({
    name: 'form_type',
    initialState: FormType.NEW,
    reducers: {
        setFormType(_state,action:PayloadAction<FormType>){
            return action.payload;
        }
    }
});

export const { setFormType } = setFormTypeSlice.actions;

export const form_type = setFormTypeSlice.reducer;