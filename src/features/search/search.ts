import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


const initialState = {
    searchQuery : "",
    cachedSearch : {},
    videos : [],
}

export const searchSlice = createSlice({
    name : 'search',
    initialState,
    reducers : {
        cacheSearchResults : (state, action:  PayloadAction<Object>) => {
             return state = {...state, cachedSearch : { ...action.payload}}
        },
        setSearchQuery : (state, action) => {
            return state = {...state, searchQuery : action.payload}
        },
        getSearchedVideos : (state, action) => {
            return state = {...state, videos : action.payload}
        }
    }
})

export const { cacheSearchResults, setSearchQuery, getSearchedVideos } = searchSlice.actions;
export default searchSlice.reducer
