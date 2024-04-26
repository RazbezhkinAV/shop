import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { loadState } from './storage'

export const JWT_PERSISTENT_KEY = 'useData'

export interface UserPersistentState {
  jwt: string | null
}

export interface UserState {
  jwt: string | null
}

const initialState: UserState = {
  jwt: loadState<UserPersistentState>(JWT_PERSISTENT_KEY)?.jwt ?? null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addJwt: (state, action: PayloadAction<string>) => {
      state.jwt = action.payload
    },
    logout: (state) => {
      state.jwt = null
    }
  }
})

export default userSlice.reducer
export const userActions = userSlice.actions
