import React from 'react'

const Trial = () => {
    // variable decleare or function decleartion
    let x = 10;
    let y ="hello"
    let z = {name:"one", email:"one@gmail.com"};
    // console.log(z.email) // "one@gmail.com"
    let a  = [10, 20, 30, 40, 50];
    
    let b = [
        {productName:"iphone", price:10000, rating:5},
        {productName:"xBox", price:20000, rating:5},
        {productName:"MI", price:30000, rating:3},
        {productName:"realme", price:40000, rating:2},
    ] 
  return (
    <div>
      <h1>THis is Trial Page</h1>
      <p> {x} </p>
      <p> {y} </p>
      <p>username = {z.name}</p>
      <p>user email = {z.email}</p>
      {/* <p>{a[0]}</p>
      <p>{a[1]}</p>
      <p>{a[2]}</p>
      <p>{a[3]}</p>
      <p>{a[4]}</p> */}

      {
        a.map((val , i)=>{
            return <p>{val}</p>
        })
      }

      {
        b.map((val, i)=>{
            return <div style={{backgroundColor:"green",marginBottom:"10px",color:"white"}}>
                <p>{val.productName}</p>
                <p>{val.price}</p>
                <p>{val.rating}</p>
            </div>
        })
      }
    </div>
  )
}

export default Trial
