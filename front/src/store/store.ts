import { configureStore } from '@reduxjs/toolkit'
import userSlice, { JWT_PERSISTENT_KEY } from './userSlice'
import { saveState } from './storage'

export const store = configureStore({
  reducer: {
    user: userSlice
  }
})

store.subscribe(() => {
  saveState(JWT_PERSISTENT_KEY, { jwt: store.getState().user.jwt })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
