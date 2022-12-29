import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Tasksrow = ({ key, task, handleTaskDelete }) => {
    const { _id, taskname, taskDescription, reviewtext } = task;
    const { user } = useContext(AuthContext);
    return (

        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user?.email}
            </th>
            <td class="py-4 px-6">
                {taskname}
            </td>
            <td class="py-4 px-6">
                {taskDescription}
            </td>

            <td class="py-4 px-6">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
            <td class="py-4 px-6">
                <button onClick={() => handleTaskDelete(_id)} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Remove</button>
            </td>
            <td class="py-4 px-6">
                <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Completed</button>
            </td>

        </tr>


    );
};

export default Tasksrow;