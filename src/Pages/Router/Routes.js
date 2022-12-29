import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import CompletedTasks from '../Completedtasks/CompletedTasks';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Mytasks from '../Mytasks/Mytasks';
import SignUp from '../SignUp/SignUp';
import PrivateRoute from './PrivateRoute';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/mytasks',
                element: <PrivateRoute><Mytasks></Mytasks></PrivateRoute>
            },
            {
                path: '/completedtasks',
                element: <PrivateRoute><CompletedTasks></CompletedTasks></PrivateRoute>

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },

        ]
    }
])
export default router;