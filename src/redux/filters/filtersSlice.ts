import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
    searchValue: string;
    sortBy: 'title' | 'rating' | 'year';
}

const initialState: FiltersState = {
     searchValue: '',
    sortBy: 'title'
}

const filtersSlice = createSlice ({
    name: 'filters',
    initialState,
    reducers: {
        setSearchValue: ( state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        },
        setSortBy: (state, action: PayloadAction<FiltersState['sortBy']>) => {
            state.sortBy = action.payload;
        }
    }
})

export const { setSearchValue, setSortBy} = filtersSlice.actions;
export default filtersSlice.reducer;