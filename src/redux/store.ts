import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/moviesSlice";
import filtersReducer from "./filters/filtersSlice";
import serchReducer from "./search/searchSlice";


export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        filters: filtersReducer,
        search: serchReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;