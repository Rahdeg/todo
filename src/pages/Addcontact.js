import React from 'react'
import { Link, useNavigate, useParams, } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useState} from 'react'

const initialstate = {
  user_id: '',
  todo: '',
}

const Addcontact = () => {
    const [state, setState] = useState(initialstate)

    const {user_id,todo}= state;
    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
      
    axios.get(`https://todo22a.herokuapp.com/api/v1/task/${id}`)
    .then((resp)=> setState({...resp.data}))
     
    }, [id])
    

    const submitform =(e)=>{

        e.preventDefault();
        
    if(!user_id || !todo) {
      toast.error('input value into each fields');
    }else {
      if (!id) {
        axios.post('https://todo22a.herokuapp.com/api/v1/task',{
        user_id,todo
      }).then(()=>{
        setState({user_id:'',todo:''});
      }).catch((err)=>toast.error(err.response.data));
      toast.success('Contact Added Successfully')
      setTimeout(()=>navigate(`/${user_id}`),500);
      } else {
        axios.put(`https://todo22a.herokuapp.com/api/v1/task/edit/${id}`,{
       todo
      }).then(()=>{
        setState({id:'',todo:''});
      }).catch((err)=>toast.error(err.response.data));
      toast.success('Contact Updated Successfully')
      setTimeout(()=>navigate(`/${user_id}`),500);
      }
      
    }
  }


  const handleclick = (e)=>{
    const {name,value}= e.target;
    setState({...state,[name]:value})
  }


  


  return (
    <div>
    <article class="pa4 black-80">
  <form action="sign-up_submit" onSubmit={submitform}>
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      <legend class="ph0 mh0 fw6 clip">Add to todo List</legend>
      <div class="mt3">
      <label class="db fw4 lh-copy f6" for="name">USER ID</label>
      <input class="pa2 input-reset white ba bg-transparent w-100 measure" type="text" name="user_id" value={user_id || ""}  id="user_id" onChange={handleclick}/>
    </div>
      <div class="mt3">
        <label class="db fw4 lh-copy f6" for="email-address">TO DO</label>
        <input class="pa2 input-reset white ba bg-transparent w-100 measure" type="text" name="todo" value={todo || ''} id="todo" onChange={handleclick}/>
      </div>
    </fieldset>
    <div class="mt3"><input class=" ph3 pv2 input-reset ba b--black  grow pointer f6 w-100 measure bg-green" type="submit" value={id ? 'update contact': 'save'} /></div>
    <Link to={`/${user_id}`}>
    <div class="mt3"><input class=" ph3 pv2 input-reset ba b--black white grow pointer f6 w-100 measure bg-black" type="submit" value="Go Back"/></div>
    </Link>
   
    
  </form>
</article>

    </div>
  )
}

export default Addcontact