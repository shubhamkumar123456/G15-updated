import React from 'react'
import UserContext from './UserContext'
import { useState } from 'react';

const UserState = (props) => {
    const [bgColor , setBgColor] = useState("white")
    const [obj, setdata] = useState({
        name:"jhon",
        age:45,
        course:"fullstack"
    });

    let x = 10;

    let y = [10, 20, 30, 40]


  return (
   <UserContext.Provider value={{x, obj,y,setdata,bgColor, setBgColor}}>
            {props.children}
   </UserContext.Provider>
  )
}

export default UserState
