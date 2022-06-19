import React from 'react'
import { useNavigate, useParams, } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useState} from 'react'



const initialState = {
    username: '',
    email: '',
    password: '',
}

const Signup = () => {
    const [user, setUser] = useState(initialState);
    const {username, email, password} = user;
    const navigate = useNavigate();
    const {id}= useParams();

useEffect(() => {
  axios.get(`https://todo22a.herokuapp.com/api/v1/user/${id}`)
   .then((response) => setUser(response.data)) 
}, [id])

const submitform =(e)=>{

    e.preventDefault();
    
if(!username || !email || !password) {
  toast.error('input value into each fields');
}else {
  if (!id) {
    axios.post('https://todo22a.herokuapp.com/api/v1/user/register',{
    username,email,password
  }).then(()=>{
    setUser({username:'',email:'',password:''});
  }).catch((err)=>toast.error(err.response.data));
  toast.success('Contact Added Successfully')
  setTimeout(()=>navigate('/success'),500);
  } else {
    axios.put(`https://todo22a.herokuapp.com/api/v1/user/${id}`,{
    username,email,password
  }).then(()=>{
    setUser({username:'',email:'',password:''});
  }).catch((err)=>toast.error(err.response.data));
  toast.success('Contact Updated Successfully')
  setTimeout(()=>navigate('/update'),500);
  }
  
}
}

const handleChange =(e)=>{
    const {name,value} = e.target;
    setUser({...user,[name]:value});
}




  return (
    <div className=''>
    <article class="pa4 black-80 tc pt6">
  <form action="sign-up_submit"  onSubmit={submitform}>
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0 ">
      <legend class="ph0 mh0 fw6 clip">Sign Up</legend>
      <div class="mt3">
        <label class="db fw4 lh-title f4 white" for="username">Username</label>
        <input class="pa2 input-reset ba bg-white w-100 measure" type="text" name="username" value={username || ""} id="username" onChange={handleChange}/>
      </div>
      <div class="mt3">
        <label class="db fw4 lh-title f4 white" for="email">Email</label>
        <input class="b pa2 input-reset ba bg-white  w-100 measure" type="email" name="email" value={email || ""} id="email" onChange={handleChange}/>
      </div>
      <div class="mt3">
        <label class="db fw4 lh-title f4 white" for="password">Password</label>
        <input class="b pa2 input-reset ba bg-white  w-100 measure" type="password" name="password" value={password || ""}  id="password" onChange={handleChange}/>
      </div>
    </fieldset>
   <div class="mt3">

   <input class="b ph3 pv2 input-reset ba b--black bg-blue grow white pointer lh-title f4 " type="submit" value={id ? 'update contact': 'save'}/>
   </div>
 
    
   
    
  </form>
</article>

    
    </div>
  )
}

export default Signup