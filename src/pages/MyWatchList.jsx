import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyWatchList = () => {
    const items = useLoaderData();
    
    return (
        <div>
            <h2>My watchlist</h2>
            <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>User Creation Time</th>
                                <th>User Last Login</th>
                                <th>Operations</th>
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

                                        <td>
                                            
                                        </td>
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