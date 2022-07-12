import React,{useState,useRef,useEffect} from 'react'
import './Login.css';
import {Navigate} from 'react-router-dom'
import user from './Userdata';

export const UserContext=React.createContext()


function Loginpage() {
    const refvar=useRef()
    const[details , setDetails]=useState({username:'', password:''})
    const[flag,setFlag]=useState(false)

    useEffect(()=>{
        refvar.current.focus()
    },[])

    const handler=(e)=>{
        e.preventDefault();
        setFlag(false)
        user.map(el=>{
            (el.username === details.username && el.password === details.password ) && setFlag(true)
        })
        //!flag && alert("Wrong credentials")
        
        setDetails({username:'', password:''})
    }

  return (
      <>
      {flag ?(<Navigate to="/fooditem"/>)
      :
      <div className="login">
        <form onSubmit={handler}>
            <label>User name</label>
            <br/>
            <input type='text' ref={refvar} value={details.username} placeholder='User Name' 
            onChange={e=>setDetails({...details, username: e.target.value})} />
            <br/>
            <label>Password</label>
            <br/>
            <input type='Password' value={details.password} placeholder='Password' 
            onChange={e=>setDetails({...details, password: e.target.value})} />
            <br/>
            <input id='btn' type='submit' value='Submit'/>
        </form>

      </div>
      }
      </>
    
  )
}

export default Loginpage