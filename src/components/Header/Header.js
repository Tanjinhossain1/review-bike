import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {  MenuIcon, XIcon } from '@heroicons/react/solid'

const Header = () => {
    const [open, setOpen] = useState(false);
    
    console.log(open)
    return (
        <div className='mt-4'>
          

            <div onClick={() => setOpen(!open)} className="h-10 w-10 md:hidden">
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>

            <div className={`md:flex  lg:static text-2xl  md:static justify-center w-full absolute ${open ? 'top-10 text-center relative': 'top-[-180px]'}`}>
                <div className='mr-12'>
                    <NavLink className={({ isActive }) => isActive ? ' border-b-4 border-orange-600 font-semibold text-orange-700' : 'font-semibold border-b-4 '} to='/'>Home</NavLink>
                </div>
                <div className='mr-12'>
                    <NavLink className={({ isActive }) => isActive ? ' border-b-4 font-semibold border-orange-600   text-orange-700' : 'font-semibold border-b-4 '} to='/reviews'>REVIEWS</NavLink>
                </div>
                <div className='mr-12'>
                    <NavLink className={({ isActive }) => isActive ? ' border-b-4 font-semibold border-orange-600   text-orange-700' : 'font-semibold border-b-4 '} to='/dashBoard'>DASHBOARD</NavLink>
                </div>
                <div className='mr-12'>
                    <NavLink className={({ isActive }) => isActive ? ' border-b-4 font-semibold border-orange-600   text-orange-700' : 'font-semibold border-b-4 '} to='/blogs'>BLOGS</NavLink>
                </div>
                <div className='mr-12'>
                    <NavLink className={({ isActive }) => isActive ? ' border-b-4 font-semibold border-orange-600   text-orange-700' : 'font-semibold border-b-4 '} to='/about'>ABOUT</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;