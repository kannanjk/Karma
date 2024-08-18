import { createSlice } from '@reduxjs/toolkit'

interface CounterState {
    chat: any
}
 
const initialState: CounterState = {
    chat: null,
}

export const chatSlice = createSlice({
    name:"chat",
    initialState,
    reducers:{
        setChat:(state,action)=>{
            state.chat = action.payload
        }
    }
})  

export const {setChat}= chatSlice.actions