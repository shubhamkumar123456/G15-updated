import React, { useRef } from 'react'
import { useState } from 'react';

const ExpenseTracker = () => {

    let expenseRef = useRef(); //{current : undefined}
    let priceRef = useRef(); //{current : undefined}
    let dateRef = useRef(); //{current : undefined}

    // let expenseData = [
    //     {id:1 , expenseName:"movies" , price:250,date:"24-08-26"},
    //     {id:2 , expenseName:"petrol" , price:500,date:"23-08-26"},
    //     {id:3 , expenseName:"Dinner" , price:500,date:"22-08-26"},
    //     {id:4 , expenseName:"zoo" , price:1500,date:"22-08-26"},
    // ]

    const [expenseData , setExpenseData] = useState(
        [
        {id:1 , expenseName:"movies" , price:250,date:"24-08-26"},
        {id:2 , expenseName:"petrol" , price:500,date:"23-08-26"},
        {id:3 , expenseName:"Dinner" , price:500,date:"22-08-26"},
        {id:4 , expenseName:"zoo" , price:1500,date:"22-08-26"},
    ]
    )
    function handleAddExpense(e){
        e.preventDefault();
        
        let obj = {
            id: expenseData.length+1,
            expenseName:expenseRef.current.value,
            price:priceRef.current.value,
            date:dateRef.current.value
        }
        // console.log(obj)
        // expenseData.push(obj)
        // console.log(expenseData)

        let copyArr = [...expenseData] // [{} , {} , {} ,[]]
        copyArr.push(obj);              // [ {} , {} , { } , {}, {}]

        setExpenseData(copyArr)
        // setExpenseData([...expenseData , obj])
    }

    function handleDelete(obj , i){
        console.log(obj)
        console.log(i)

        let copyArr = [...expenseData] //copy old array into new array
        copyArr.splice(i , 1) //updated array
        setExpenseData(copyArr);
    }
  return (
    <div>
      <h1 className='expenseHeading'>Expense Tracker App</h1>
            <form action="">
                <input ref={expenseRef} type="text" placeholder='expense Name' />
                <input ref={priceRef} type="text" placeholder='enter price' />
                <input ref={dateRef} type="date" />
                <button onClick={handleAddExpense}>Add Expense</button>
            </form>
        <table border={1} cellSpacing={0}>
            <thead> 
                <tr>
                    <th>Sno</th>
                    <th>Expense Name</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
               {expenseData.map((val , i)=>{
                    return <tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.expenseName}</td>
                        <td>{val.price}</td>
                        <td>{val.date}</td>
                        <td><button onClick={()=>handleDelete(val, i)}>delete</button></td>
                    </tr>
               })}
            </tbody>
        </table>

      {/* {expenseData.map((val, i)=>{
            return <div>
                <p>{val.id}</p>
                <p>{val.expenseName}</p>
                <p>{val.price}</p>
                <p>{val.date}</p>
            </div>
      })} */}
    </div>
  )
}

export default ExpenseTracker
