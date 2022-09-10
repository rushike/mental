import { createSlice } from '@reduxjs/toolkit'

const auth = createSlice({
name: 'auth',
initialState: {
    user : null
},
reducers: {
    LogInUser(state, action) {
        state["user"] = action.payload
    },
    LogOutUser(state, action) {
        state["user"] = null
    }
}
})

export const { LogInUser, LogOutUser } = auth.actions
export default auth.reducer