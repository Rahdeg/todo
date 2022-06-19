import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useEffect,useState } from 'react';
import axios from 'axios';


const View = () => {
    const [user, setuser] = useState({})

    const {id}= useParams();
    useEffect(() => {
      
        axios.get(`https://todo22a.herokuapp.com/api/v1/task/${id}`)
        .then((resp)=> setuser({...resp.data}))
        
        }, [id])
        console.log(user);
  return (
    <div>
    <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
  <div class="tc">
    <h1 class="f3 mb2">{user.user_id} </h1>
    <h2 class="f5 fw4 gray mt0">{user.todo} </h2>
    <h2 class="f5 fw4 gray mt0">{(user.status === 0)? user.status = "completed" :
    user.status = "not completed"} </h2>
  </div>
  <Link to='/home'>
  <div class="mt3"><input class=" ph3 pv2 input-reset ba b--black white grow pointer f6 w-100 measure bg-black" type="submit" value="Go Backward"/></div>
  </Link>
</article>


    </div>
  )
}

export default View