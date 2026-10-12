import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    let ctx = useSelector((store)=>store.c) //{value: 0,arr:[10, 20, 30, 40],user:{name:"john", email:"john@gmail.com"}},
    console.log(ctx)
  return (
    <div style={{backgroundColor:"brown",color:"white"}}>
      <h1>This is Home Page</h1>
      <h2>Count = {ctx.value}</h2>
      <h2>user name =  {ctx.user.name}</h2>
      <h2>user email =  {ctx.user.email}</h2>
      <button>Increment Count</button>
      <button>Decrement Count</button>
      <button>Update Name</button>
      <button>Update Email</button>
    </div>
  )
}

export default Home
