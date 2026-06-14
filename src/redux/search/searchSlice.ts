import { createSlice } from "@reduxjs/toolkit";

interface SearchState {
    query:string,
}
const initialState: SearchState = {
    query: "",
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {},
})

export default searchSlice.reducer;