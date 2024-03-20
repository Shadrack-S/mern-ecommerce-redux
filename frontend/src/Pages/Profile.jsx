import axios from 'axios'
import React from 'react'
import { redirect } from 'react-router-dom'

export async function loader() {
    try{
        const res =await axios.post(`${import.meta.env.VITE_API_URL}/auth/status`,{role: 'User'},{withCredentials:true})
        console.log(res)
        return{res}
    }catch(error){
        return redirect('/login')
    }
}

const Profile = () => {

  return (
    <div>Profile</div>
  )
}

export default Profile