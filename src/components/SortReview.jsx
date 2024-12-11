import React, { useState } from 'react';

const SortReview = () => {
    const [reviews, setReviews] = useState([
        { id: 1, title: "Elden Ring", rating: 9.7, year: 2022, genre: "RPG" },
        { id: 2, title: "The Legend of Zelda: Breath of the Wild", rating: 9.8, year: 2017, genre: "Adventure" },
        { id: 3, title: "Cyberpunk 2077", rating: 8.5, year: 2020, genre: "Action" },
        { id: 4, title: "God of War: Ragnarok", rating: 9.5, year: 2022, genre: "Action" },
        { id: 5, title: "The Sims 4", rating: 7.8, year: 2014, genre: "Simulation" },
        { id: 6, title: "Age of Empires IV", rating: 8.7, year: 2021, genre: "Strategy" },
    ]);

    const [filteredGenre, setFilteredGenre] = useState("");

    // Filter reviews by selected genre
    const filteredReviews = filteredGenre
        ? reviews.filter((review) => review.genre === filteredGenre)
        : reviews;

    return (
        <section className="p-6 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-6">All Reviews</h2>

                {/* Filter Dropdown */}
                <div className="mb-6 flex justify-end">
                    <select
                        value={filteredGenre}
                        onChange={(e) => setFilteredGenre(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">Filter by Genre</option>
                        <option value="Action">Action</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Strategy">Strategy</option>
                        <option value="Simulation">Simulation</option>
                        <option value="RPG">RPG</option>
                    </select>
                </div>

                {/* Reviews Grid */}
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {filteredReviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-white p-4 shadow-md rounded-lg"
                        >
                            <h3 className="text-xl font-semibold">{review.title}</h3>
                            <p className="text-gray-500">Rating: {review.rating}</p>
                            <p className="text-gray-500">Year: {review.year}</p>
                            <p className="text-gray-500">Genre: {review.genre}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SortReview;
