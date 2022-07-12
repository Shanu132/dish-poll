import React,{useEffect,useState} from 'react'
import Navbar from './Navbar'
import axios from "axios";
import './Fech.css'

function Fechfood() {
  const [data, setData] = useState([]);
  const [isactive, setIsactive] = useState({rank1:false,rank2:false,rank3:false})
  const [count, setCount] = useState(1)

  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json")
      .then((res) => {
        console.log(res.data);
        setData([...res.data]);
      })          
  }, []);

  const handelclick1=(id)=>{
    setIsactive({...isactive, rank1:true})
    setCount((count)=>count+1)
    const value=30*count
    localStorage.setItem(id,value)

  }
  const handelclick2=(id)=>{
    setIsactive({...isactive, rank2:true})
    setCount((count)=>count+1)
    const value=20*count
    localStorage.setItem(id,value)
  }
  const handelclick3=(id)=>{
    setIsactive({...isactive, rank3:true})
    setCount((count)=>count+1)
    const value=10*count
    localStorage.setItem(id,value)
  }

  return (
    <>
      <Navbar/>
      <div className="card">
      {
        data.map((el)=> {
          return(
            <div key={el.id} className="unitcard" >
              <img src={el.image} alt="#" style={{borderRadius:"7px"}}/>
              <h3>{el.dishName}</h3>
              <h6>{el.description}</h6>
              Vote : 
              <button onClick={()=>handelclick1(el.id)} disabled={isactive.rank1}>Rank 1</button>
              <button onClick={()=>handelclick2(el.id)} disabled={isactive.rank2}>Rank 2</button>
              <button onClick={()=>handelclick3(el.id)} disabled={isactive.rank3}>Rank 3</button>
            </div>
          )

        })
          
      }
      </div>
    </>
  )
}

export default Fechfood