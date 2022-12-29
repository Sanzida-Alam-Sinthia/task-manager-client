import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import CompletedTasks from '../Completedtasks/CompletedTasks';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Mytasks from '../Mytasks/Mytasks';
import SignUp from '../SignUp/SignUp';
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
                element: <Mytasks></Mytasks>
            },
            {
                path: '/completedtasks',
                element: <CompletedTasks></CompletedTasks>

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