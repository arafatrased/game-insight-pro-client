import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png'
import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { AuthContext } from '../provider/AuthProvider';
import logo from '../assets/logo.png';

const Navbar = () => {
    const { logOut } = useContext(AuthContext);

    const { user } = useContext(AuthContext);
    const links = <div className="flex flex-col md:flex-row gap-2">
        <Link to="/" className='hover:text-orange-700 font-semibold'>Home</Link>
        <Link to="/allreviews" className='hover:text-orange-700 font-semibold'>All-reviews</Link>
        {
            user && <><Link to="/addreview" className='hover:text-orange-700 font-semibold'>Add-review</Link>
                <Link to={`/myreview/${user?.email}`} className='hover:text-orange-700 font-semibold'>My-reviews</Link>
                <Link to='/gamewatchlist' className='hover:text-orange-700 font-semibold'>Game-watchlist</Link>
                </>
        }
    </div>
    return (
        <div className='w-full bg-orange-100 mt-0'>
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className='flex items-center justify-center gap-1'>
                        <img className='w-8 h-8 rounded-xl' src={logo} alt="" />
                        <Link to="/" className='text-md md:text-l lg:text-2xl font-bold'>
                            Game Insight Pro</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-2 px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-3">

                    {user?.email ? <><img className='w-9 h-9 rounded-full' src={user?.photoURL ? user.photoURL : userIcon} alt="" />
                        <h2 className='hidden md:inline-block'>{user?.email}</h2>
                        <Link to="/" onClick={logOut} className='flex items-center gap-1 text-orange-800'><span><FaUser></FaUser></span>Logout</Link>
                    </> : <>
                        <Link to="/login" className='flex items-center gap-1 text-orange-800'><span><FaUser></FaUser></span>Login</Link>
                        <h2>|</h2>
                        <Link to="/register" className='flex items-center gap-1 text-orange-800'><span><FaLock></FaLock></span>Sing Up</Link>
                    </>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;