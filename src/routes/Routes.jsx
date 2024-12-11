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
            loader: ()=> fetch('http://localhost:5000/homereview')
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
          loader: ()=> fetch('http://localhost:5000/allreviews')
        },
        {
          path: '/reviewdetails/:id',
          element: <PrivateRoute><ReviewDetails></ReviewDetails></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/reviewdetails/${params.id}`)
        },
        {
          path: '/myreview',
          element: <PrivateRoute><MyReview></MyReview></PrivateRoute>,
        },
        {
          path: '/mywatchlist',
          element: <PrivateRoute><MyWatchList></MyWatchList></PrivateRoute>,
          loader: ()=> fetch('http://localhost:5000/allreviews')

        }
      
    ]
    },
  ]);

export default router;