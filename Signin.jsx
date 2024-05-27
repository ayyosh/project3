import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
function Signin() {
  const[user,setUser] = useState({
      
      email:'',
      password:'',
      
  });
  const handelSubmit = async (e)=>{
  e.preventDefault();
  const formData = new FormData();
  
  formData.append('email',user.email);
  formData.append('password',user.password);
 
  const {data} = await axios.post(`https://ecommerce-node4-five.vercel.app/auth/signin`,formData);
  console.log(data);
  };
    function handelChange(e) {
      const { name, value } = e.target;
      setUser({
        ...user,
        [name]: value
      });
    }
     
  
  return (
  <>

  <form onSubmit={handelSubmit}>

  
  <label>Email</label>
  <input type="email" value={user.email} name ="email" onChange={handelChange}/>
  <label>Password</label>
  <input type="password" value={user.password} name ="password" onChange={handelChange}/>

 
  <button type='submit'>submit</button>
  </form>
  </>
  
  )};
export default Signin