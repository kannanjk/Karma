import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './Features/GetUser'
import { TypedUseSelectorHook } from 'react-redux'
import { useSelector } from 'react-redux'
import { postSlice } from './Features/SetPost'
import { chatSlice } from './Features/SetChat'

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    posts: postSlice.reducer,
    chat: chatSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;