import React, { useRef } from 'react'

const GetTagValue = () => {
    
    let x = 10

    let y = useRef(); //{ current: undefined}

    // console.log(y)

    function handleClick(){
        console.log(y)  // {current:tag}
        console.log(y.current)  // tag
        console.log(y.current.innerHTML)
    }

  return (
    <div>
      <h1>THis Get  Tag Page</h1>
      <p>{x}</p>

      <p ref={y}>hello how are you</p>
      <input type="text" />

      <button onClick={handleClick}>click me</button>
    </div>
  )
}

export default GetTagValue
