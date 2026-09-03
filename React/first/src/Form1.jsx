import React from 'react'
import { useRef } from 'react'

const Form1 = () => {
    let nameRef = useRef(); // {current : undefined} ,{current:input}
    let emailRef = useRef(); // current:
    let maleRef = useRef();
    let femaleRef = useRef();
    let  languageRef = useRef();

    function handleSubmit(e){
        e.preventDefault();
        console.log("running");

        let gender;
        if(maleRef.current.checked ===true){
            gender = "male";
        }
        else{
            gender = "female"
        }

        let obj = {
            name:nameRef.current.value,
            email:emailRef.current.value,
            // male:maleRef.current.checked,
            // female:femaleRef.current.checked,
            // gender:maleRef.current.checked===true ? "male" : "female",
            gender:gender,
            language:languageRef.current.value
        }
        console.log(obj)

    }
  return (
    <div>
      <h1>This is uncontrolled component</h1>
      <form action="">
        <label htmlFor="">Name</label>
        <input ref={nameRef} type="text" placeholder='enter name' /> <br />

        <label htmlFor="">Email</label>
        <input ref={emailRef} type="email" placeholder='enter email' /><br />

        <label htmlFor="">Gender:</label>
        <label htmlFor="">Male</label>
        <input value={'male'} ref={maleRef} type="radio" name='gender' />
        <label htmlFor="">Female</label>
        <input value={'female'} ref={femaleRef} name='gender' type="radio" /><br />

        <select ref={languageRef} name="" id="">
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

export default Form1
