import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        email: '',
        phone: '',
    },
    reducers: {
        updateField: (state, action) => {
            const{field, value} = action.payload;
            state[field] = value;
        }
    }
})

export const {updateField} = formSlice.actions;
export default formSlice.reducer;