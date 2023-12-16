import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filter : false,
}

const FilterSlice = createSlice({
    name: 'filterSlice',
    initialState,
    reducers: {
        handleFilter(state, action) {
            console.log(state);
            console.log(action.payload);
            state.filter = action.payload;
        }
        
    }
})

export const { handleFilter} = FilterSlice.actions;

export default FilterSlice.reducer;