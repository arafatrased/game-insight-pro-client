import React from 'react';
import { FcRating } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

const ReviewCard = ({ review }) => {

    const { gameTitle, genre, publishingYear, gameCover, displayName, rating, _id } = review;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 bg-base-100 dark:bg-black dark:text-white shadow-xl">
            <figure>
                <img
                    className='w-full h-full rounded-sm'
                    src={gameCover}
                    alt="Album" />
            </figure>
            <div className="card-body flex flex-col border-2">
                <h2 className="card-title font-semibold text-orange-700">{gameTitle}</h2>
                <div className='flex items-center gap-1 font-bold'>
                    <span className='text-green-700'>Rating: </span> <span><FcRating /></span>{rating}</div>
                <p className=''><span className='text-green-700'>Genre:</span> {genre}</p>
                <p className=''><span className='text-green-700'>Year:</span> {publishingYear}</p>
                <div className='flex-grow'>
                    <p><span className='text-green-700'>Reviewer Name:</span> {displayName}</p>
                </div>
                <div data-tooltip-id='my-tooltip' className="card-actions items-end justify-center">
                    <Link to={`/reviewdetails/${_id}`} className="w-full bg-green-700 text-white py-2 px-4 rounded hover:bg-green-500 hover:font-semibold">Review Details</Link>
                </div>
                <Tooltip id="my-tooltip">
                    <div>
                        <h3>See Details about This Game</h3>       
                    </div>
                </Tooltip>
            </div>
        </div>
    );
};

export default ReviewCard;