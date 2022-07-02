import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'





const Dashboard = () => {
    const [getdata, setgetdata] = useState([])
   


     const {id} = useParams();

     const loadData = async (id) =>{
      const response = await axios.get(`https://todo22a.herokuapp.com/api/v1/task/user/${id}`);
      setgetdata(response.data)
  }


  
  

     useEffect(() => {
      
     loadData(id);
       
      }, [id])
      
      const deletecontact=(id)=>{
        if (window.confirm('confirm delete contact!!')) {
          axios.delete(`https://todo22a.herokuapp.com/api/v1/task/${id}`);
          toast.success('contact deleted successfully');
          setTimeout(()=>loadData(),500);
          
        }
      }
      


console.log(getdata);


  return (
    <div className="">
    <Link to='/addcontact'>
          <a className="f6 link dim ph3 pv2 mb2 dib tc ml7 br2 white bg-blue" href="#0">Add todo {id} </a>
          </Link>
    <div class="pa4 pt2">
    <div class="overflow-auto">
      <table class="f6 w-100 mw8 center" cellspacing="0">
        <thead className='bg-green'>
          <tr>
            <th class="fw6 bb b--black-20  pb3 pv2 mr1 bg-green">NO</th>
            <th class="fw6 bb b--black-20  pb3 pv2  bg-green">TODO</th>
            <th class="fw6 bb b--black-20  pb3 pv2  bg-green">STATUS</th>
            <th class="fw6 bb b--black-20  pb3 pv2  bg-green">TIME</th>
            <th class="fw6 bb b--black-20  pb3 pv2  bg-green">ACTIONS</th>
          </tr>
        </thead>
    {
      getdata? getdata.map((tasks,idx)=>(
        <tbody class="lh-copy">
        <tr key={tasks.id} >
          <td class="pv3 pr3 bb white b--black-20">{idx+1}</td>
        
          <td class="pv3 pr3 bb white b--black-20">{tasks.todo}</td>
          <td class="pv3 pr3 bb white b--black-20">{ (tasks.status === 0)? tasks.status = "completed" :
          tasks.status = "not completed"}</td>
          <td class="pv3 pr3 bb white b--black-20">{tasks.created_on}</td>
          <td class="pv3 pr3 bb white b--black-20">
          <Link to={`/update/${tasks.id}`}>
          <a class="f6 link dim ph3 pv2 mb2 br2 dib ma3 black  bg-light-blue" href="#0">Edit</a>
          </Link>
          <a class="f6 link dim ph3 pv2 mb2 dib br2 ma3 black bg-red" href="#0" onClick={()=>deletecontact(tasks.id)}>Delete</a>
          <Link to={`/view/${tasks.id}`}>
          <a class="f6 link dim ph3 pv2 mb2 dib ma3 br2 black bg-gray" href="#0">view</a>
          </Link>
          </td>
        </tr>
      </tbody>
      )): null
    }

    </table>
    </div>
    </div>
    </div>
  )
}

export default Dashboard