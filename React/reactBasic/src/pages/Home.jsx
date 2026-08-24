// rafce
import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {

  let taskArr = [
    {id:1 , taskName:"html study" , status:"incompleted"},
    {id:2 , taskName:"Js study" , status:"completed"},
    {id:3 , taskName:"Css study" , status:"incompleted"},
  ]

  return (
    <div>
        {/* <Navbar/> */}
      <h1 style={{textAlign:"center"}}>Task App</h1>
      <table border={1} cellSpacing={0} cellPadding={'10px'}>
        <thead>
          <th>Sno</th>
          <th>TaskName</th>
          <th>Status</th>
          <th></th>
        </thead>
        <tbody>

          {
            taskArr.map((val, i)=>{
              return <tr>
                  <td>{val.id}</td>
                  <td>{val.taskName}</td>
                  <td>{val.status}</td>
              </tr>
            })
          }

          
          {/* <tr>
            <td>{taskArr[0].id}</td>
            <td>{taskArr[0].taskName}</td>
            <td>{taskArr[0].status}</td>
          </tr>
          <tr>
            <td>{taskArr[1].id}</td>
            <td>{taskArr[1].taskName}</td>
            <td>{taskArr[1].status}</td>
          </tr>
          <tr>
            <td>{taskArr[2].id}</td>
            <td>{taskArr[2].taskName}</td>
            <td>{taskArr[2].status}</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  )
}

export default Home
