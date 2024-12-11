import React from 'react';
import imgslider1 from '../assets/hitman.jpeg'
import imgslider2 from '../assets/PofP.jpg'
import imgslider3 from '../assets/chess2.jpg'

const BlogSection = () => {
    const games = [
        {
            id: 1,
            title: "The Legend of Zelda: Breath of the Wild",
            review: "An epic open-world adventure with breathtaking visuals and innovative gameplay.",
            rating: 9.8,
            image: "https://via.placeholder.com/300",
        },
        {
            id: 2,
            title: "Elden Ring",
            review: "A masterpiece blending challenging combat with an expansive world to explore.",
            rating: 9.7,
            image: "https://via.placeholder.com/300",
        },
        {
            id: 3,
            title: "God of War: Ragnarok",
            review: "A compelling narrative-driven game with stunning graphics and engaging combat.",
            rating: 9.5,
            image: "https://via.placeholder.com/300",
        },
        {
            id: 4,
            title: "Cyberpunk 2077",
            review: "An ambitious RPG offering a rich world, though marred by early performance issues.",
            rating: 8.5,
            image: "https://via.placeholder.com/300",
        },
    ];


    return (
        <section className="p-6 bg-gray-100">
            <div className="container mx-auto">
                <h2 className='text-center text-green-700 font-bold text-5xl my-10'>Our Blogs</h2>
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                    {games.map((game) => (
                        <div
                            key={game.id}
                            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                        >
                            <img
                                src={imgslider1}
                                alt={game.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
                                <p className="text-gray-600">{game.description}</p>
                                <a
                                    href={game.link}
                                    className="inline-block mt-4 text-blue-500 hover:underline"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
