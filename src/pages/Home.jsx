import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewCard from '../components/ReviewCard';
import imgslider1 from '../assets/hitman.jpeg'
import imgslider2 from '../assets/PofP.jpg'
import imgslider3 from '../assets/chess2.jpg'
import BlogSection from '../components/Blog';
import ContactPage from '../components/ContactPage';
import { Typewriter } from 'react-simple-typewriter'



const Home = () => {
    const reviewData = useLoaderData();
    const [reviews, setReviews] = useState(reviewData);
    return (
        <div className='min-h-screen'>

            <div>
                <div className="carousel h-[60vh] w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                            src={imgslider1}
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>

                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src={imgslider2}
                            className="w-full blur-[2px]" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                        <div className='absolute bottom-2 space-y-4 right-[50%]'>
                            <h2 className='text-white text-xl md:text-3xl text-center font-bold'>Rouge Price of Persia</h2>
                            <p className='text-white'>Play with intense and suspense</p>
                            <button className="btn bg-orange-400">Play Now</button>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src={imgslider3}
                            className="w-full blur-[2px]" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                        <div className='absolute bottom-2 space-y-4 right-[50%]'>
                            <h2 className='text-white text-3xl font-bold text-center'>Ultimate Chess 2</h2>
                            <p className='text-white'>Play with intense and suspense</p>
                            <button className="btn bg-orange-400">Play Now</button>
                        </div>

                    </div>

                </div>
            </div>
            <div className='my-5'>
                <h2 className='text-center text-green-700 font-bold text-5xl my-10'>Highest Rated Game</h2>
                <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    {
                        reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
                    }
                </div>
            </div>
            <BlogSection></BlogSection>
            <ContactPage></ContactPage>
        </div>
    );
};

export default Home;