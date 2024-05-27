import React from 'react'
import axios from 'axios';
import  { useEffect} from 'react'
import { useState } from 'react';
function Categories() {
    const[categories,setCategories] = useState([]);

    const getCategories = async ()=>{
        const {data} = await axios.get(`https://ecommerce-node4-five.vercel.app/categories`);
      
setCategories(data.categories);  
    };
  
    useEffect(()=>{
        getCategories();
      },[]);

  return (
    <>
    <h2>categories</h2>
    {categories.map(category=>
       <div className='category' key={category._id}>
        <h2> {category.name}</h2>
        <img src={category.image.secure_url}/>
       </div> 
        )}
    </>
  )
}

export default Categories