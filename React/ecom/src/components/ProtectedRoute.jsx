import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {

    let ctx = useSelector((state)=>state.auth)//{isLoggedIn:false,user:{}}

    if(ctx.isLoggedIn===false){
        return <Navigate to={'/login'}/>
    }
    else{
        return children
    }

}

export default ProtectedRoute
