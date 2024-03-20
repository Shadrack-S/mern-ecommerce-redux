import React, { useEffect, useState } from 'react';
import Slider from '../components/Slider';
import Card from '../components/Card';
import axios from 'axios';

const Home = () => {

  const[products ,setProducts] =useState([])

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/auth/status`,{withCredentials:true})
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  },[])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/products`);
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="relative  overflow-hidden ">
      <div>
        <Slider />
      </div>
    
    <div className='container mx-auto px-5 mt-6'>
      <h1 className=' font-bold text-2xl'>Top Deals</h1>
    <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>

      {
        products && products.map(product=>(
          <Card key={product._id} product={product}/>
        ))
      }
     
      
    </div>
      
    </div>
   
      
    </div>
  );
};

export default Home;
