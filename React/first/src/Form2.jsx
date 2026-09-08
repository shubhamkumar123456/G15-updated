import React from 'react'
import { useState } from 'react';


const Form2 = () => {

  const [details, setdetails] = useState({
    name:"",
    email:"",
    password:"",
    language:""
  });
    
    function handleSubmit(e){
        e.preventDefault();
        console.log(details)
    }
    function handleChanger(e){
        // console.log("hello")
        // console.log(e.target); //tag  = 
        // console.log(e.target.name)  // name attribute value =
        // console.log(e.target.value);// tag value  = 
        setdetails({...details , [e.target.name]:e.target.value});
    }


  return (
    <div>
      <h1>This is controlled component</h1>
      <form action="">
        <label htmlFor="">Name</label>
        <input  name='name' onChange={handleChanger} type="text" placeholder='enter name' /> <br />

        <label htmlFor="">Email</label>
        <input name="email" onChange={handleChanger}  type="email" placeholder='enter email' /><br />

        <label htmlFor="">Password</label>
        <input name="password" onChange={handleChanger} type="password" /> <br />

        <select onChange={handleChanger} name="language" id="">
                <option value="">Select a language</option>
                <option value="Python">Python</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="Java script">Java script</option>
        </select> <br />
        <button onClick={handleSubmit}>Submit</button>


      </form>
    </div>
  )
}

export default Form2
