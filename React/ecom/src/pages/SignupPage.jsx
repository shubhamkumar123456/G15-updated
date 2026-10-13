import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const SignupPage = () => {
    let nameRef = useRef()  // {current:undefined}  , {current:<input/>}
    let emailRef = useRef()
    let passwordRef = useRef()


      let arr = [];

    function handleSubmit(e){
        e.preventDefault();
        let obj = {
          name:nameRef.current.value,
          email:emailRef.current.value,
          password:passwordRef.current.value
        }

        console.log(obj)
        arr.push(obj);

        // localstorage save data -->localStorage.setItem(key , value)
        // localstorafe get data --> localstorage.getItem(key)
        localStorage.setItem('g15Signup', JSON.stringify(arr))
        console.log(arr)
    }



    let userArr = [
      {name:"john", email:"john@gmail.com",password:"123123"},
      {name:"nick", email:"nick@gmail.com",password:"133123"},
      {name:"shane", email:"shane@gmail.com",password:"123123"},
    ]

    let newUser = {name:"undertaker" , email:"nick@gmail.com",password:"123454"}


  return (
    <div>
        {/*example of  controlled component */} 

        <h1 className='text-center my-[30px] text-4xl font-bold '>Signup Page</h1>
      <form action="" className='flex flex-col mx-auto  p-5 gap-3 border w-[40%] min-w-[380px]'>
            <label htmlFor="">Name</label>
            <input ref={nameRef} type="text" className='border p-2'  placeholder='enter your name' />

            <label htmlFor="">Email</label>
            <input ref={emailRef} type="email" className='border p-2'  placeholder='enter your email' />

            <label htmlFor="">Password</label>
            <input ref={passwordRef} type="text" className='border p-2' placeholder='enter your password' />

            <button onClick={handleSubmit} className='bg-blue-950 text-white hover:bg-blue-700 px-4 py-2 rounded-md cursor-pointer'>Login</button>

            <p className='text-center'>Already have an account ? <Link className='text-blue-600' to={'/login'}>login</Link></p>
      </form>
    </div>
  )
}

export default SignupPage
