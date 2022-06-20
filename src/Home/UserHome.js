import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'


const UserHome = () => {
  return (
    <div className='bg '>
    <div className=''>
    <h1 className='blue mt0 tc pv3 f-headline'>
    WELCOME TO OPEN TODO APP
    </h1>
    <h3 className='blue mt0 tc pv1 f-headline'>
    WE ARE HERE TO SATISFY YOUR NEED
    </h3>
    <div className='center tc mt5'>
    <Link to='/signup'>
    <a class="f6 link dim ph5 pv4 br3 w8 mb2 dib white bg-dark-blue" href="#0">Register Your Account</a>
    </Link>
    </div>
    
   
    
    </div>
    </div>
   
  )
}

export default UserHome