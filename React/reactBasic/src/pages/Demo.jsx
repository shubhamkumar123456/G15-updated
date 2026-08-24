import React from 'react'

const Demo = () => {

    let x = 10;
    let text = "hello"
    let y = {name:"two", age:64 , course:"backend"};

    let data = [
        {name:"one", age:34 , course:"fullstack"},
        {name:"four", age:24 , course:"frontend"},
        {name:"three", age:44 , course:"backend"},
        {name:"two", age:64 , course:"backend"},
    ]
  return (
    <div>
      <h1>This is Demo</h1>
     <p>{x}</p>
     <p>{text}</p>
     <p>userName ={ y.name}</p>
     <p>user Age ={ y.age}</p>
     <p>course ={ y.course}</p>

     {/* <div>
        <p>{data[0].name}</p>
        <p>{data[0].age}</p>
        <p>{data[0].course}</p>
     </div>

     <div>
        <p>{data[1].name}</p>
        <p>{data[1].age}</p>
        <p>{data[1].course}</p>
     </div> */}

     {
        data.map((val ,i)=>{
            return <div>
                <p>{val.name}</p>
                <p>{val.course}</p>
                <p>{val.age}</p>
            </div>
        })
     }

     


    </div>
  )
}

export default Demo
