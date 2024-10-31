import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import ProfileDropdown from './ProfileDropdown';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Navbar = () => {
    const items = useSelector(state => state.cart.items);
    const cartCount = items.reduce((total, item) => total + item.quantity, 0);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/status`, { role: 'User' }, { withCredentials: true });
                setLoggedIn(true);
            } catch (error) {
                console.error(error);
                setLoggedIn(false);
            }
        };
        fetchData();
    }, []);

    const navItems = [
        { path: "/", title: "Home" },
        { path: "/products", title: "Products" },
        { path: "/cart", title: "Cart" },
        { path: "#", title: "Account" } //todo

    ];

    return (
        <>
            <nav className="bg-gray-800">
                <div className="flex justify-between items-center mx-auto max-w-screen-xl p-4">
                    <NavLink to="#" className="text-3xl font-bold text-white">Shopzey</NavLink>
                    <div className="flex items-center relative">
                        <NavLink to='cart' className="relative">
                            {cartCount > 0 && (
                                <span className="absolute top-0 left-5  bg-red-500 text-white rounded-full flex justify-center items-center w-6 h-6 text-xs">{cartCount}</span>
                            )}
                            <FaShoppingCart className='text-white text-3xl' />
                        </NavLink>
                    </div>

                    <div className="flex items-center">
                        {loggedIn ? <ProfileDropdown /> : <NavLink to="/login" className="text-white font-semibold text-md hover:underline">Login</NavLink>}
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
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
                </div>
            </nav>
        </>
    );
};

export default Navbar;
