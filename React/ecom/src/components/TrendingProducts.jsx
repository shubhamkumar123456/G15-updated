import React from 'react'

const TrendingProducts = (props) => {
    console.log(props)  //{data:[{},{},{},{}]}
  return (
    <div className='flex [w-80%] text-center mx-auto my-10'>
      {/* <h1>This is Trending products component</h1>
       */}

       {
        props.data.map((ele, i)=>{
            return <div>
                <img src={ele.thumbnail} alt="" />
                <p>{ele.title}</p>
            </div>
        })
       }
    </div>
  )
}

export default TrendingProducts
