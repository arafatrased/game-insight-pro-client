import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2'
// icons
import { RxCross1 } from "react-icons/rx";

const MyReview = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);
    const [isModalOpen, setisModalOpen] = useState(false);
    const [updateData, setUpdateData] = useState({})
    const userEmail = user?.email;
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(`http://localhost:5000/myreviews?email=${userEmail}`);
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error('Error fetching items:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchItems();
    }, [userEmail]);
    if (loading) {
        return <div>Loading...</div>;
    }
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/delete/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainingItem = items.filter(item => item._id !== id);
                            setItems(remainingItem);
                        }
                    })
            }
        });
    }
    const handleUpdate = (item) => {
        setisModalOpen(true);
        console.log(item)
        setUpdateData(item)
    }

    const handleUpdateFormData = (e) => {
        e.preventDefault()
        const form = e.target;
        const displayName = form.name.value;
        const email = form.email.value;
        const gameCover = form.gameurl.value;
        const gameTitle = form.gameTitle.value;
        const genre = form.genre.value;
        const reviewDescription = form.description.value;
        const rating = form.rating.value;
        const publishingYear = form.publishyear.value;
        const id = updateData._id
        console.log(displayName, email, gameCover, gameTitle, genre, reviewDescription, rating, publishingYear, id)
        const updatedReview = { displayName, email, gameCover, gameTitle, genre, reviewDescription, rating, publishingYear };

        fetch(`http://localhost:5000/update/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedReview),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount>0){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `Updated successfully!`,
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
            })

            setisModalOpen(false);
            

    }
    return (
        <div className='min-h-screen'>
            <div className='my-8'>
                {
                    items ? <div>
                        <h2 className='text-center text-green-700 font-bold text-3xl mt-8 mb-4'>My Reviews</h2>
                        <p className='w-6/12 mx-auto text-center mb-8'>Reviews that gave by the user with their playing experiences and feelings they shared with us for all of our users which will convey an inmportance toward playing further.</p>
                    </div> : <h2 className='text-center text-green-700 font-bold text-3xl mt-8 mb-4'>You Havn't Posted a Review Yet!</h2>
                }
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
                                            <button onClick={() => handleDelete(item._id)} className="btn btn-error mr-2">Delete</button>
                                            <button onClick={() => handleUpdate(item)} className="btn">Update</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                <div
                    className={`${isModalOpen ? " visible" : " invisible"
                        } w-full h-screen fixed top-0 left-0 z-50 bg-[#0000002a] transition-all duration-300 flex items-center justify-center`}
                >
                    <div
                        className={`${isModalOpen ? " scale-[1] opacity-100" : " scale-[0] opacity-0"
                            } w-[90%] md:w-[80%] lg:w-[50%] bg-[#fff] rounded-lg transition-all duration-300 mx-auto mt-8`}
                    >
                        <div className="w-full flex items-end p-4 justify-between border-b border-[#d1d1d1]">
                            <h1 className="text-[1.5rem] font-bold">
                                Update Review
                            </h1>
                            <RxCross1
                                className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
                                onClick={() => setisModalOpen(false)}
                            />
                        </div>

                        <form onSubmit={handleUpdateFormData} className="flex flex-col gap-1 p-4">
                            <div>
                                <label

                                    className="text-[1rem] font-[500] text-[#464646]"
                                >
                                    User Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={updateData.displayName}
                                    className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-[#3B9DF8]"
                                />
                            </div>
                            <div>
                                <label

                                    className="text-[1rem] font-[500] text-[#464646]"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    defaultValue={updateData.email}
                                    className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-[#3B9DF8]"
                                />
                            </div>
                            <div>
                                <label

                                    className="text-[1rem] font-[500] text-[#464646]"
                                >
                                    Game Cover Image URL
                                </label>
                                <input
                                    type="text"
                                    name="gameurl"
                                    defaultValue={updateData.gameCover}
                                    className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-[#3B9DF8]"
                                />
                            </div>
                            <div>
                                <label

                                    className="text-[1rem] font-[500] text-[#464646]"
                                >
                                    Game Title
                                </label>
                                <input
                                    type="text"
                                    name="gameTitle"
                                    defaultValue={updateData.gameTitle
                                    }
                                    className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-[#3B9DF8]"
                                />
                            </div>
                            <div>
                                <label
                                    className="text-[1rem] font-[500] text-[#464646]"
                                >
                                    Review Description
                                </label>
                                <textarea
                                    rows="3"
                                    type="text"
                                    name="description"
                                    defaultValue={updateData.reviewDescription
                                    }
                                    className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-[#3B9DF8]"
                                />
                            </div>
                            <div>
                                <label
                                    className="text-[1rem] font-[500] text-[#464646]"
                                >
                                    Genre
                                </label>
                                <input
                                    type="text"
                                    name="genre"
                                    defaultValue={updateData.genre
                                    }
                                    className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-[#3B9DF8]"
                                />
                            </div>
                            <div>
                                <label
                                    className="text-[1rem] font-[500] text-[#464646]"
                                >
                                    Rating
                                </label>
                                <input
                                    type="number"
                                    name="rating"
                                    defaultValue={updateData.rating}
                                    className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-[#3B9DF8]"
                                />
                            </div>
                            <div>
                                <label
                                    className="text-[1rem] font-[500] text-[#464646]"
                                >
                                    Publishing Year
                                </label>
                                <input
                                    type="number"
                                    name="publishyear"
                                    defaultValue={updateData.publishingYear}
                                    className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-[#3B9DF8]"
                                />
                            </div>
                            <button
                                type="submit"
                                className="py-2 px-4 w-full bg-green-700 text-[#fff] rounded-md"
                            >
                                Update
                            </button>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReview;
