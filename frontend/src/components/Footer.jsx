import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const navItems = [
    { path: "/", title: "Home" },
    { path: "/products", title: "Products" },
    { path: "/cart", title: "Cart" },

];
  return (
   
    <div className='bg-gray-800 text-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div>
            <h2 className='text-2xl font-bold mb-2'>Connect with Us</h2>
            <p>Follow us on social media for updates and promotions.</p>
            {/* Add social media icons and links here */}
          </div>
          <div className='mt-4 md:mt-0'>
            <h2 className='text-2xl font-bold mb-2'>Quick Links</h2>
            <ul>
              {navItems.map((data) => (
                        <li key={data.path}>
                            <NavLink
                                to={data.path}
                                className={({ isActive }) => isActive ? "underline font-semibold text-gray-400 " : "font-semibold"}
                            >
                                {data.title}
                            </NavLink>
                        </li>
                    ))}
            </ul>
          </div>
          <div className='mt-4 md:mt-0'>
            <h2 className='text-2xl font-bold mb-2'>Contact Us</h2>
            <p>Email: shadrackshibu1@yahoo.com</p>
            <p>Phone: +91 8714723017</p>
          </div>
        </div>
        <div className='text-center mt-8'>
          <p>&copy; 2024 Shopzey. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
