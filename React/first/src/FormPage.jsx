import React, { useRef } from 'react'
import { FaRegEye } from "react-icons/fa";

const FormPage = () => {

    // let inputTag = document.getElementById('name1');
    // console.log(inputTag);
    let nameRef = useRef(); //{current: undefined} //{current:<input/>}
    let emailRef = useRef(); // {current:undefined} //{current:<input/>}
    let passwordRef = useRef()  // {current:undefined} //{current:<input/>}
    console.log(nameRef)
    
    
    let headingRef = useRef()  // {current:undefined}
    function handleSubmit(e){
        e.preventDefault()// stop reloading page
        // console.log("running")
        // console.log(nameRef)
        // console.log(nameRef.current)
        // console.log(nameRef.current.value)
        // console.log(headingRef.current)
        // console.log(headingRef.current.innerHTML)
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }
  return (
    <div>
        <FaRegEye size={30} color='red' />
      <h1 ref={headingRef}>This is Form component</h1>
      <form className='formPage' action="">
        <label htmlFor="">Name</label>
        <input ref={nameRef} id='name1' type="text" placeholder='enter your name' /> <br />

        <label htmlFor="">Email</label>
        <input ref={emailRef} type="email"  placeholder='enter your email'/>
            <br />
        <label htmlFor="">Password</label>
        <input ref={passwordRef} type="password" />

        <br />
        <button onClick={handleSubmit}>Submit</button>

      </form>
    </div>
  )
}

export default FormPage
