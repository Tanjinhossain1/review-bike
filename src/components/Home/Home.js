import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    console.log(reviews)
    return (
        <div>
            <div className='sm:ml-12 mt-44 lg:flex justify-around'>
                <div className=''>
                    <h1 className='text-6xl font-bold text-neutral-600' >YOUR NEXT BIKE </h1>
                    <h1 className='text-6xl font-bold text-blue-700 mb-6'>YOUR BEST BIKE </h1>
                    <p>Welcome! This bike is most beautiful bike in hole world. This is the best bike for you. <br />This bike is lonched in few day and it's total brand new bike. That's why buy this bike and <br /> enjoy your moment.</p>
                    <button className='border-2 border-blue-100 rounded-lg hover:bg-blue-500 text-blue-800 py-4 px-6 mt-6 bg-blue-100 font-bold hover:text-white'>Live Demo</button>
                </div>
                <div>
                    <img src="https://im.rediff.com/getahead/2018/jul/06kawasaki-ninja-h2.jpg" alt="" />
                </div>
            </div>
            <h1 className='text-center text-3xl mt-16'>Total Review: ({reviews.slice(0, 3).length})</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.slice(0, 3).map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Home;