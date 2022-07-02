import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import { toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import './sign.css'



const Signin = () => {

  const navigate = useNavigate();
  const [formValid, setFormValid] = useState(false);
  const [login, setLogin] = useState('')

  const [form, setForm] = useState({
         
          email: "",
          password: ""
      });
  const {email,password} = form;
    useEffect(() => {
        if (
        form.email !== '' &&
        form.password !== '') 
        {
          setFormValid(true)
        } else {
          setFormValid(false)
        }
  }, [form])
  
  const handlesubmit=(e) => {
    e.preventDefault();
    sessionStorage.setItem('deriveinput',JSON.stringify({...form}))
    axios.post('https://todo22a.herokuapp.com/api/v1/user/login',{email,password} )
    .then(response=>{
      if (response.data.message) {
        setLogin(response.data.message);
      } else {
        toast.success(`Welcome back ${response.data.data.username}`);
        setTimeout(()=>navigate(`/${response.data.data.id}`),1500);
      }
    }).catch((err)=>toast.error(err.response.data.message))
    
    }
   
  
      const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
  

  return (
    <div>
    <main class="pa4 black-80 ">
  <form class="measure center" onSubmit={handlesubmit}>
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0 mt6">
      <legend class="f4 fw6 ph0 mh0 tc white ">Sign In</legend>
      <div class="mt3">
        <label class="db fw6 lh-copy f6 white" for="email-address">Email</label>
        <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email"  id="email-address" onChange={handleChange}/>
      </div>
      <div class="mv3">
        <label class="db fw6 lh-copy f6 white" for="password">Password</label>
        <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={handleChange}/>
      </div>
      <label class="pa0 ma0 lh-copy f6 pointer white"><input type="checkbox"/> Remember me</label>
    </fieldset>
    <div className="">
      <input class="b ph3 pv2 input-reset center ba b--black bg-transparent grow pointer f6 flex" 
       className= {formValid?"auth_signup-active":"auth_signup-submit"} type="submit" value="Sign in" disabled={!formValid}/>
    </div>
    <div class="lh-copy mt3">
      <a href="#0" class="f6 link dim black  db white">Sign up</a>
    </div>
  </form>
</main>
    <h1 className='tc'>{login}</h1>
    </div>
  )
}

export default Signin