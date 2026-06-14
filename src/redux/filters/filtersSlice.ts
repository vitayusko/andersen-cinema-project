import { createSlice } from "@reduxjs/toolkit";

interface FiltersState {
    genre: string[];
    year: number | null;
    rating: number | null;
}

const initialState: FiltersState = {
    genre: [],
    year: null,
    rating: null,
}

const filterSlice = createSlice ({
    name: 'filters',
    initialState,
    reducers: {}
})
export default filterSlice.reducer;