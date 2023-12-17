import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { LIVE_CHAT_OFFSET } from "../../constants";

type MessageType = {
    name : string,
    message : string
}

type InitialStateType = {
    messages : MessageType[]
}

export const livechatSlice = createSlice({
  name : "livechat",
  initialState : {
    messages : [
        {name : 'Panda', message : "What's your go-to beverage during gaming sessions? 🥤"},
        {name : 'Sobit', message : "Let's break a new record for likes today! 👍💯"},
        {name : 'Colt', message : "If you could visit any fictional world, where would you go? 🌌"},
        {name : 'Dev', message : "Who remembers the first game they ever played? 🕹️"},
        {name : 'Magnum', message : 'Learning React with Akshay Sainin 🎉🎉🎉🚀😊'},
        {name : 'Genome', message : "Who else is excited for the weekend? 🎉"},
    ]
  } as InitialStateType,

  reducers : {
    addMessage : (state, action: PayloadAction<MessageType>)=> {
        state.messages.splice(LIVE_CHAT_OFFSET)
        state.messages.unshift(action.payload)
    }
  }
})

export const { addMessage } = livechatSlice.actions;
export default livechatSlice.reducer;