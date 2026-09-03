import React from 'react'
import { useRef } from 'react'

const Form2 = () => {
    
    function handleSubmit(e){
        e.preventDefault();
        console.log("running")
    }

    function handleChanger(e){
        // console.log("hello")
        console.log(e.target)  //tag
        console.log(e.target.value)
    }

    
  return (
    <div>
      <h1>This is uncontrolled component</h1>
      <form action="">
        <label htmlFor="">Name</label>
        <input onChange={handleChanger} type="text" placeholder='enter name' /> <br />

        <label htmlFor="">Email</label>
        <input onChange={handleChanger}  type="email" placeholder='enter email' /><br />

        <label htmlFor="">Gender:</label>
        <label htmlFor="">Male</label>
        <input onChange={handleChanger} value={'male'}  type="radio" name='gender' />
        <label htmlFor="">Female</label>
        <input onChange={handleChanger} value={'female'}  name='gender' type="radio" /><br />

        <select onChange={handleChanger} name="" id="">
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
