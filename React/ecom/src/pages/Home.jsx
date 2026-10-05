import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';
import TrendingProducts from '../components/TrendingProducts';
const Home = () => {

  const [allproducts, setAllProducts] = useState([]);
  console.log(allproducts);

  async function getData(){
    let res = await fetch('https://dummyjson.com/products?limit=0&skip=0');
    let data = await res.json();
    console.log(data)
    console.log(data.products)  // [{}, {},...30]
    setAllProducts(data.products)
  }

  let smartphones = allproducts.filter((val)=>val.category==="smartphones")
  let laptops = allproducts.filter((val)=>val.category==="laptops")

  console.log(smartphones)
  console.log(laptops)
 

  useEffect(()=>{
      getData()
  }, [])


  return (
    <div>
        {/* <Navbar/> */}

        <TrendingProducts data = {smartphones}/>

        <TrendingProducts data = {laptops}/>
    
      <div className='grid px-10 gap-3 lg:grid-cols-4  md:grid-cols-2 grid-cols-1'>
        {
        allproducts.map((val, i)=>{
          return <div className='flex flex-col items-center gap-4 p-4'>
              <img src={val.thumbnail} alt="" />
              <p className='font-bold'>{val.title}</p>
              <p>{val.price}</p>
                <div className='w-full'>
                  <button className='bg-blue-950 text-white w-full px-4 py-3 rounded-2xl hover:bg-blue-800 mb-2'>Add to Cart</button>
                  
                  <Link to={'/view'} state={val} className='bg-green-950 block text-center text-white w-full px-4 py-3 rounded-2xl hover:bg-green-800'>View Details</Link>
                </div>
          </div>
        })
      }
      </div>
    </div>
  )
}

export default Home
