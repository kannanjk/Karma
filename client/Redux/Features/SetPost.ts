import { createSlice } from '@reduxjs/toolkit'

interface CounterState {
    post: any
}

const initialState: CounterState = {
    post: null,
}
 
export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setPost: (state, action) => {
            state.post = action.payload
        }
    }
})

export const { setPost } = postSlice.actions