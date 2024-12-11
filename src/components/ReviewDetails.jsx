import React from 'react';
import { useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';

const ReviewDetails = () => {
    const reviewdata = useLoaderData();
    const { gameTitle, genre, email, gameCover, publishingYear, reviewDescription, displayName, rating } = reviewdata;
    const watchlistData = { gameTitle, genre, email, gameCover, publishingYear, reviewDescription, displayName, rating };
    const handleWatchList = (review) =>{
        fetch('http://localhost:5000/addwatchlist', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                toast.success('Review Added to watchlist!');
            }
        })
    }
    return (
        <div className="card bg-base-100 image-full shadow-xl">
            <figure>
                <img
                    className='w-full max-h-screen'
                    src={gameCover}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className='w-8/12 mx-auto'>
                    <h2 className="card-title text-5xl my-10 font-bold justify-center">{gameTitle}</h2>
                    <p className='text-center text-xl font-bold my-4'>{reviewDescription}</p>
                    <div className='text-lg my-10'>
                        <h2>Genre: <span className='text-red-300 font-bold'>{genre}</span></h2>
                        <h2>Ratings: <span className='text-red-300 font-bold'>{rating}</span></h2>
                        <h2>Publishing Year: <span className='text-red-300 font-bold'>{publishingYear}</span></h2>
                        <h2>Reviewer: <span className='text-red-300 font-bold'>{displayName}</span></h2>
                        <h2>Email: <span className='text-red-300 font-bold'>{email}</span></h2>
                    </div>
                </div>
                <div className="card-actions justify-center">
                    <button className="btn bg-orange-400">Play Now</button>
                    <button onClick={() => handleWatchList(watchlistData)} className="btn bg-orange-400">Add to Watchlist</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetails;