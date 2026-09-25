import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
const Home = () => {

  const [allproducts, setAllProducts] = useState([]);
  console.log(allproducts);

  async function getData(){
    let res = await fetch('https://dummyjson.com/products');
    let data = await res.json();
    console.log(data)
    console.log(data.products)  // [{}, {},...30]
    setAllProducts(data.products)
  }

 
  useEffect(()=>{
      getData()
  }, [])

 



  return (
    <div>
        {/* <Navbar/> */}
    
      <div className='grid px-10 gap-3 lg:grid-cols-4  md:grid-cols-2 grid-cols-1'>
        {
        allproducts.map((val, i)=>{
          return <div className='flex flex-col items-center gap-6'>
              <img src={val.thumbnail} alt="" />
              <p className='font-bold'>{val.title}</p>
              <p>{val.price}</p>
              <button className='bg-blue-950 text-white w-full px-4 py-3 rounded-2xl hover:bg-blue-800'>Add to Cart</button>
              <button className='bg-green-950 text-white w-full px-4 py-3 rounded-2xl hover:bg-green-800'>View Details</button>
          </div>
        })
      }
      </div>
    </div>
  )
}

export default Home
