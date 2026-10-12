import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    arr:[10, 20, 30, 40],
    user:{name:"john", email:"john@gmail.com"}
  },
  reducers: {
    updateEmail:(state,action)=>{
        console.log(action) // action.payload --> data recieve
        state.user.email = action.payload
    },
    increment: state => {
      state.value += 1
    },
    addElement:(state,action)=>{
        state.arr.push(110)
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const {updateEmail, increment,addElement, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer