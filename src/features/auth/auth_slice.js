import { createSlice } from '@reduxjs/toolkit'

const auth = createSlice({
name: 'auth',
initialState: {
    user : null,
    token : null
},
reducers: {
    LogInUser(state, action) {
        state["user"] = action.payload;
    },
    LogOutUser(state, action) {
        state["user"] = null;
    },
    SetToken(state, action) {
        state["token"] = action.payload;
    }
}
})

export const { LogInUser, LogOutUser, SetToken } = auth.actions
export default auth.reducer