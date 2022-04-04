import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div>
           <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-12'>
               {
                   reviews.map(review => <Review key={review.id} review={review}></Review>)
               }
           </div>
        </div>
    );
};

export default Reviews;