import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri'
import './navigation.css'

const Navigation = () => {
  const [toggleNav, setToggleNav] = useState(false)
  return (
    <div className='pd_contain'>
    <div className='fl w-100 pa2 ba '>
      <div className='flex justify-between'>
      <div className='f3 link dim i white pv2 '>
      <Link className='white pv2 ba br3 bg-dark-blue' to='/homee'>
      TODO APP
      </Link>
      </div>
      <div className='nav_content'>
      <input type='search' name='search' placeholder='Type here' className='br2 pv2 ph2 mr2'></input>
      <Link to='/signup'>
      <a class="f6 link dim ph3 pv2 mb2 br2 dib white bg-blue" href="#0">Register</a>
      </Link>
      <Link to='/signin'>
      <a class="f6 link dim ph3 pv2 mb2 br2 dib white bg-hot-pink" href="#0">SignOut</a>
      </Link>
      
      </div>
    
     
      <div className='flex hide '>
      
        { toggleNav? <RiCloseLine color='#fff' size={27} onClick={()=>setToggleNav(false)}/>
    :<RiMenu3Line color='#fff' size={27} onClick={()=>setToggleNav(true)}/> }
    { toggleNav && (
     <div className='flex scale-up-center hide__contain'>
     <Link to='/signin'>
     <div>
     <a class="f6 link dim ph3 pv2 mb2 br2 dib white bg-blue" href="#0">Signin</a>
     </div>
     <div>
     <a class="f6 link dim ph3 pv2 mb2 br2 dib white bg-hot-pink" href="#0">SignOut</a>
     </div>
     </Link>
     </div>
    )
      }
     
      </div>    
      </div>
      </div>
    </div>
  )
}

export default Navigation