import React from 'react'
import { useNavigate } from 'react-router-dom';

const FrontPage = () => {
    const navigate=useNavigate()

    const loginpage=()=>{
        navigate('/homePage')
    }
  return (
    <div>
        <button onClick={loginpage}>Suma</button>
    </div>
  )
}

export default FrontPage