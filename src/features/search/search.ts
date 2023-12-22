import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type VideoInfoType = {
    searchQuery : string,
    cachedSearch : {},
    nextPageToken: string;
    videos: any[];
    visitedPages: string[];
};

const initialState: VideoInfoType = {
    searchQuery : "",
    cachedSearch : {},
    nextPageToken : '',
    videos : [],
    visitedPages : []

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
            if(action.payload.type === 'INITIAL_VIDEO_SEARCH'){
                return {...state, videos : action.payload.videos, nextPageToken : action.payload.nextPageToken}
            }else if(action.payload.type === 'INFINITE_VIDEO_SEARCH'){
                console.log(action.payload  )
                return {...state, videos :  [...state.videos, ...action.payload.videos], nextPageToken : action.payload.nextPageToken}
            }
        }
    }
})

export const { cacheSearchResults, setSearchQuery, getSearchedVideos } = searchSlice.actions;
export default searchSlice.reducer
