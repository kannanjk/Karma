import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CounterState {
    user: any
}
 
// Define the initial state using that type
const initialState: CounterState = {
    user: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
    },
})

export const { setUser } = userSlice.actions