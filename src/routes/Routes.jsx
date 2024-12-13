import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Register from '../components/Register';
import Login from '../components/Login';
import AddReview from '../pages/AddReview';
import PrivateRoute from '../private/PrivateRoute';
import Allreview from '../pages/Allreview';
import ReviewDetails from '../components/ReviewDetails';
import MyReview from '../pages/MyReview';
import MyWatchList from '../pages/MyWatchList';


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('https://game-insight-pro-server.vercel.app/homereview')
        },
        {
            path: "/addreview",
            element: <PrivateRoute><AddReview></AddReview></PrivateRoute>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/allreviews',
          element: <Allreview></Allreview>,
          loader: ()=> fetch('https://game-insight-pro-server.vercel.app/allreviews')
        },
        {
          path: '/reviewdetails/:id',
          element: <PrivateRoute><ReviewDetails></ReviewDetails></PrivateRoute>,
          loader: ({params})=> fetch(`https://game-insight-pro-server.vercel.app/reviewdetails/${params.id}`)
        },
        {
          path: '/myreview',
          element: <PrivateRoute><MyReview></MyReview></PrivateRoute>,
        },
        {
          path: '/mywatchlist',
          element: <PrivateRoute><MyWatchList></MyWatchList></PrivateRoute>,
          loader: ()=> fetch('https://game-insight-pro-server.vercel.app/watchlist')
        },
      ]
    },
  ]);

export default router;