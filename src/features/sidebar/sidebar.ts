import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type SidebarType = {
    isSidebarOpen: boolean
}

const initialState: SidebarType = {
    isSidebarOpen : true
}

export const sidebarSlice = createSlice({
    name : 'sidebar',
    initialState,
    reducers : {
        sidebarToggle : (state) => {
            state.isSidebarOpen = !state.isSidebarOpen
        },
        sidebarClose : (state) => {
            state.isSidebarOpen = false
        } 

    }
})

export const { sidebarToggle, sidebarClose  } = sidebarSlice.actions;

export default sidebarSlice.reducer;