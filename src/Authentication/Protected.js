import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'

const Auth =()=>{
  let userdetails= JSON.parse(sessionStorage.getItem('deriveinput'))
  return userdetails
}

const Protected = () => {
  const isAuth = Auth();
  return isAuth ? <Outlet/> :<Navigate to='/signin'/>
   
}

export default Protected