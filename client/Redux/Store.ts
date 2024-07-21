import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './Features/GetUser'
import { TypedUseSelectorHook } from 'react-redux'
import { useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    //   posts: postsReducer,
    //   comments: commentsReducer,
    user: userSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;