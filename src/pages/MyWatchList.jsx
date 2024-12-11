import React from 'react';
import { useLoaderData } from 'react-router-dom';


const MyWatchList = () => {
    const items = useLoaderData();
    
    return (
        <div className='min-h-screen'>
            <h2 className='text-center text-green-700 font-bold text-3xl mt-8 mb-4'>My Reviews</h2>
            <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Game Title</th>
                                <th>Email</th>
                                <th>Rating</th>
                                <th>Genre</th>
                                <th>Year</th>
                                <th>Description</th>
                                <th>Reviewer</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map((item, index) =>
                                    <tr key={item._id}>
                                        <th>{index + 1}</th>
                                        <td>{item.gameTitle}</td>
                                        <td>{item.email}</td>
                                        <td>{item.rating}</td>
                                        <td>{item.genre}</td>
                                        <td>{item.publishingYear}</td>
                                        <td>{item.reviewDescription}</td>
                                        <td>{item.displayName}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
        </div>
    );
};

export default MyWatchList;