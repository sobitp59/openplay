import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


const initialState: Object = {}

export const searchSlice = createSlice({
    name : 'search',
    initialState,
    reducers : {
        cacheSearchResults : (state, action:  PayloadAction<Object>) => {
             return state = {...state, ...action.payload}
        }
    }
})

export const { cacheSearchResults } = searchSlice.actions;
export default searchSlice.reducer
