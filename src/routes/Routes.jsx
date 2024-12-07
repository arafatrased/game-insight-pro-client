import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Register from '../components/Register';
import Login from '../components/Login';
import AddReview from '../pages/AddReview';
import PrivateRoute from '../private/PrivateRoute';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('http://localhost:5000/allreview')
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
        }
    ]
    },
  ]);

export default router;