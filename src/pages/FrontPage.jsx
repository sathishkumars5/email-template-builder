import React from 'react'
import { useNavigate } from 'react-router-dom';
import { handleLoginpage } from '../components/common/routeFunction';

const FrontPage = () => {
    const navigate=useNavigate()

  return (
    <div>
        <div style={{backgroundColor:'lightblue', display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
            <h2>Email template builder</h2>
            <button style={{backgroundColor:'grey',border:'none',width:'3rem',height:'2rem'}}>Try</button>
            <button style={{backgroundColor:'grey',border:'none',width:'3rem',height:'2rem'}} onClick={()=>handleLoginpage(navigate)}>Login</button>
            <button style={{backgroundColor:'red',border:'none',width:'4rem',height:'2rem'}}>Logout</button>
        </div>
    </div>
  )
}

export default FrontPage