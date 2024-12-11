import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewCard from '../components/ReviewCard';

const Allreview = () => {
    const allReviewsData = useLoaderData();
    const [allReviews, setAllReviews] = useState(allReviewsData)
    const [sortOption, setSortOption] = useState("");
    const [filteredGenre, setFilteredGenre] = useState("");

    const handleFilter = () =>{
        const filteredReviews = allReviewsData.filter((review) => review.genre === filteredGenre)
        setAllReviews(filteredReviews)
    }

    const handleSort = (criteria) => {
        let sortedReviews = [...allReviewsData];

        if (criteria === "rating-asc") {
            sortedReviews.sort((a, b) => a.rating - b.rating);
        } else if (criteria === "year-asc") {
            sortedReviews.sort((a, b) => a.publishingYear - b.publishingYear);
        }

        setSortOption(criteria);
        setAllReviews(sortedReviews);
    };
    return (
        <div className='min-h-screen'>
            <div className='my-8'>
                <div>
                    <h2 className='text-center text-green-700 font-bold text-3xl mt-8 mb-4'>All Reviews</h2>
                    <p className='w-6/12 mx-auto text-center mb-8'>Reviews that gave by the user with their playing experiences and feelings they shared with us for all of our users which will convey an inmportance toward playing further.</p>
                </div>
                <div className='flex justify-center items-center gap-10'>
                    <div className="mb-6 flex items-center justify-center font-bold">
                        <h2 className='mr-3 text-xl text-orange-700'>Sort By: </h2>
                        <select
                            value={sortOption}
                            onChange={(e) => handleSort(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="" disabled>
                                Sort By
                            </option>
                            <option value="rating-asc">Rating</option>
                            <option value="year-asc">Year</option>
                        </select>
                    </div>
                    
                    <div className="mb-6 flex justify-center gap-3">
                        <select
                            value={filteredGenre}
                            onChange={(e) => setFilteredGenre(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 font-bold focus:border-blue-500"
                        >
                            <option value="">Filter by Genre</option>
                            <option value="Action">Action</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Strategy">Strategy</option>
                            <option value="Simulation">Simulation</option>
                            <option value="RPG">RPG</option>
                        </select>
                        <button onClick={handleFilter} className='px-4 py-2 bg-green-700 text-white rounded-lg'>Filter</button>
                    </div>
                </div>
                <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    {
                        allReviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Allreview;