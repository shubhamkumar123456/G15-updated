import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn:false,
    user:{}
  },
  reducers: {
    loginUser: (state,action) => {
      state.isLoggedIn = true;
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { loginUser, decrement, incrementByAmount } = authSlice.actions

export default authSlice.reducer