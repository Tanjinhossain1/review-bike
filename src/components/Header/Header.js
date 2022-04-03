import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-center p-6 text-2xl md:flex justify-center'>
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
        </div>
    );
};

export default Header;