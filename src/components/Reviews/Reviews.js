import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'
const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    const Spinner = () => <div className="loader"></div>;

    return (
        <div className='mt-20 '>
            <div className='flex justify-center  text-center'>
            {reviews.length <= 0 && <Spinner/>}
            </div>
           <div className='grid md:grid-cols-2 lg:grid-cols-3 ' >
               {
                   reviews.map(review => <Review key={review.id} review={review}></Review>)
               }
           </div>
        </div>
    );
};

export default Reviews;