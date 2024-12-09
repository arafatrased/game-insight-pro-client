import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewCard from '../components/ReviewCard';

const Allreview = () => {
    const allReviewsData = useLoaderData();
    const [allReviews, setAllReviews] = useState(allReviewsData)
    return (
        <div className='min-h-screen'>
            <div className='my-8'>
                <div>
                <h2 className='text-center text-green-700 font-bold text-3xl mt-8 mb-4'>All Reviews</h2>
                <p className='w-6/12 mx-auto text-center mb-8'>Reviews that gave by the user with their playing experiences and feelings they shared with us for all of our users which will convey an inmportance toward playing further.</p>
                </div>
                <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    {
                        allReviews.map(review =><ReviewCard key={review._id} review={review}></ReviewCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Allreview;