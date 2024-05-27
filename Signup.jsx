import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { object , string } from 'yup'
import * as Yup from "yup" ;
import {  toast } from 'react-toastify'

function Signup() {
  const[user,setUser] = useState({
    userName:'',
    email:'',
    password:'',
    image:'',
});
const[errors,setErrors] = useState([]);

  function handelChange(e) {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  }
    const handelImageChange =(e)=>{
        const {name,files} = e.target;
        setUser({
            ...user,
            [name]:files[0]
        });
    };
const validateData = async ()=>{
  
  const RegisterSchema = Yup.object(
    {
      userName : Yup.string().min(5).max(20).required(),
      email : Yup.string().email().required(),
      password : Yup.string().min(8).max(20).required(),
      image : Yup.string().required(),
    });
    try{
    await  RegisterSchema. validate(user,{abortEarly:false});
    return true;
    }
    catch(error){
      
      console.log("validation error",error.errors);
      setErrors(error.err);
      const validationErrors = {};
     error.inner.forEach(err => {
        console.log(err.path);
        validationErrors[err.path] = err.message;
        setErrors(validationErrors);
      });
     
      return false;
    }
  
};
const handelSubmit = async (e)=>{
  e.preventDefault();
  const validate = await validateData();
const formData = new FormData();
  formData.append('userName',user.userName);
  formData.append('email',user.email);
  formData.append('password',user.password);
  formData.append('image',user.image);

  const {data} = await axios.post(`https://ecommerce-node4-five.vercel.app/auth/signup`,formData);
  useState({
    userName:'',
    email:'',
    password:'',
    image:'',
  });
  if( data.message=='success'){
    toast.success('your account has been created successfuly', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Zoom,
      });
   
  };
  console.log(data);

  };
return(

 <>

{errors.length > 0?errors.map(error =>
  <p>{error}</p>
):''}

<form onSubmit={handelSubmit}>
<label>UserName</label>
<input type="text" value={user.userName} name ="userName" onChange={handelChange}/>
{errors.userName}
<label>Email</label>
<input type="email" value={user.email} name ="email" onChange={handelChange}/>
{errors.email}
<label>Password</label>
<input type="password" value={user.password} name ="password" onChange={handelChange}/>
{errors.password}
<label>Image</label>
<input type="file" name ="image" onChange= {handelImageChange} />
{errors.image}
<button type='submit'>submit </button>
</form>
</>
)
};



export default Signup