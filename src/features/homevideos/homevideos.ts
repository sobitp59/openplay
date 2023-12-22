import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type VideoType = {
    videos : any[],
    nextPageToken : string,
    totalVideos : number
}

export const homeVideoSlice = createSlice({
    name : 'homevideos',
    initialState : {
        videos : [],
        nextPageToken : '',
        totalVideos : 0
    } as VideoType,
    reducers : {
        getVideos : (state, action) => {
            if(action.payload.type === 'HOME_VIDEOS'){
                return {...state, videos : action.payload.videos, nextPageToken : action.payload.nextPageToken, totalVideos : action.payload.totalVideos}
            }else if(action.payload.type === 'INFINITE_HOME_VIDEOS'){
                return {...state, videos : [...state.videos, ...action.payload.videos], nextPageToken : action.payload.nextPageToken}
            }
        }
    }
})

export const { getVideos} = homeVideoSlice.actions;
export default homeVideoSlice.reducer;