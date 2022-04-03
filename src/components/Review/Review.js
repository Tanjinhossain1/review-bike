import React from 'react';

const Review = ({ review }) => {
    console.log(review)
    const { name, userImg, rating, userReview } = review;
    return (
        <div className='border-2 p-8 m-12 rounded-lg'>
            <img className='rounded-full' src={userImg} alt="" />
            <h1 className='mt-4 text-3xl'>Name: {name}</h1>
            <p className='text-xl'>Rating: <span className='text-pink-500 font-bold'>{rating}</span></p>
            <p className='text-xl'>Review: {userReview}</p>
        </div>
    );
};

export default Review;