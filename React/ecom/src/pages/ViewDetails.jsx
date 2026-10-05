import React from 'react'
import { useLocation } from 'react-router-dom'

const ViewDetails = () => {
  let location = useLocation();  //{path: , key , state:}
  console.log(location)
  console.log(location.state)
  return (
    <div className='pt-10'>
        <div className='border p-8 flex gap-5 w-[70%] rounded-2xl mx-auto mb-2'>
            <div>
              <img className='min-w-[300px]' src={location.state.thumbnail} alt="" />
            </div>

            <div>
              <h1> <span className='font-bold text-xl'>Title :</span>{location.state.title}</h1>
              <h1 ><span className='font-bold text-xl'>Price :</span> {location.state.price}</h1>
              <h1 > <span className='font-bold text-xl'>Category :</span>{location.state.category}</h1>
              <h1 > <span className='font-bold text-xl'>Brand :</span>{location.state.brand}</h1>
               <p>{location.state.description}</p>
            </div>
        </div>
    </div>
  )
}

export default ViewDetails
