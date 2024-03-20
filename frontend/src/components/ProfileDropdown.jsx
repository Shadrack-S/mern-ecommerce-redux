import axios from 'axios';
import React, { useState } from 'react';
import { FaUser,FaPowerOff } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    axios.get(`${import.meta.env.VITE_API_URL}/auth/logout`, { withCredentials: true })
    .then(res => {
        console.log('Logout successful'); 
        window.location.reload(); 
    })
    .catch(error => {
        console.error('Logout error:', error); 
    });
};

  return (
    <div className="flex justify-center items-center z-50 ">
      <div className="w-64 shadow flex justify-center items-center">
        <div
          onClick={handleToggle}
          className={`relative border-b-4 border-transparent py-3 cursor-pointer ${
            open ? 'border-indigo-700 transform transition duration-300' : ''
          }`}
        >
          <div className="flex flex-col justify-center items-center space-x-3 cursor-pointer">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 dark:border-white border-gray-900">
              <img
                src="https://images.unsplash.com/photo-1610397095767-84a5b4736cbd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="font-semibold text-white text-lg">
             
            </div>
          </div>
          {open && (
            <div className="absolute top-full left-0 z-10 w-64 px-5 py-3 bg-gray-800 rounded-xl shadow mt-2">
              <ul className="space-y-5 text-white">
                <li className="font-medium">
                 <Link to= "profile"
                 className='flex items-center transform transition-colors duration-200 hover:border-white'>
                  <div className="mr-3 ">
                      <FaUser className='w-6 h-6'/>
                    </div>
                    Profile
                 </Link>
                </li>
                <li className="font-medium">
                  <Link to = "#"
                  className='flex items-center transform transition-colors duration-200 hover:border-white'>
                    <div className="mr-3">
                    <FaGear className='w-6 h-6' />
                    </div>
                    Settings
                  </Link>
                    
                 
                </li>
                <hr className="dark:border-gray-700" />
                <li className="font-medium">
                  <button
                    onClick={handleLogout}
                    className="flex items-center transform transition-colors duration-200 hover:border-red-600"
                  >
                    <div className="mr-3 text-red-600">
                    <FaPowerOff className='w-6 h-6' />
                    </div>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
