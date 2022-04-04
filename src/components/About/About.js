import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='mt-12 mx-auto w-3/4'>
            <div>
                <p className='text-3xl'>This page have five menu first: HOME this page have some text and product photo and three user review. and have a button when click it then open seacond: reviews this page have some review on our product.</p>
                <div className='flex mt-6'>
                    <h2>and you have any problem then </h2>
                    <Link className='text-blue-500 underline ml-2' to='/contact'>Contact Us</Link>
                </div>
            </div>
        </div>
    );
};

export default About;