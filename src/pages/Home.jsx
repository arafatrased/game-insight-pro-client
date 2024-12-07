import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewCard from '../components/ReviewCard';

const Home = () => {
    const reviewData = useLoaderData();
    const [reviews, setReviews] = useState(reviewData);
    return (
        <div className='min-h-screen'>
            <h2>Carousell</h2>
            <div>
                <h2 className='text-center text-green-700 font-bold text-3xl my-4'>All Reviews</h2>
                <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    {
                        reviews.map(review =><ReviewCard review={review}></ReviewCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;