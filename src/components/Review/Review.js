import React from 'react';

const Review = ({ review }) => {
    console.log(review)
    const { name, userImg, rating } = review;
    return (
        <div className='border-2 p-8 m-12 rounded-lg'>
            <img src={userImg} alt="" />
            <h1 className='mt-4 text-2xl'>Name: {name}</h1>
            <p>Rating: <span className='text-pink-500 font-bold'>{rating}</span></p>
        </div>
    );
};

export default Review;