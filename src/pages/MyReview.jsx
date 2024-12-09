import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const MyReview = () => {
    const myReviewdata = useLoaderData()
    return (
        <div className="overflow-x-auto min-h-screen ">
                <table className="table text-lg">
                    {/* head */}
                    <thead>
                    <tr className='text-lg'>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Rating</th>
                        <th>Title</th>
                        <th>Operations</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        myReviewdata.map((myReviewdata, index) =>
                            <tr key={myReviewdata._id}>
                                <th>{index+1}</th>
                                <td>{myReviewdata.displayName}</td>
                                <td>{myReviewdata.email}</td>
                                <td>{myReviewdata.rating}</td>
                                <td>{myReviewdata.gameTitle}</td>

                                <td>
                                    <button className="btn mr-2 btn-error text-white">Delete</button>
                                    <button className="btn mr-2">Update</button>
                                    <button className="btn bg-green-600 text-white">Add to Watchlist</button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
    );
};

export default MyReview;