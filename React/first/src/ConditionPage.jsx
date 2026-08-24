// rafce ,rfce , rfc ,rafc
import React, { useState } from 'react'

const ConditionPage = () => {
//    let x = false 
// const [state , Updatefunction] = useState(value)
const [x  , setX] = useState(false)
console.log(x)
 function handleClick(){
        // console.log("i am running")
       if(x===true){
        setX(false)
       }
       else{
        setX(true)
       }
    }
    // let val =   1;
    // if(val > 5){
    //     console.log("nice")
    // }
    // else{
    //     console.log("not nice")
    // }

    // val > 5 ?console.log("nice") :  console.log("not nice")

   

  return (
    <div>
      <h1>THis is conditional rendering page</h1>

        {/* method 1 using && operator */}
        { false  && "hello"  }


        {/* method 2 using ternary operator  */}


    {   x ? <p>this is text 1</p>  : <p>this is text 2</p> }

      
      <button onClick={handleClick}>Click me</button>
      

    </div>
  )
}

export default ConditionPage
