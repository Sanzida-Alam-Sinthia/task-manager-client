import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Tasksrow from './Tasksrow';

const Mytasks = () => {
    const { user } = useContext(AuthContext);
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch(`https://taskmanager-project-server.vercel.app/tasks?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [user?.email])

    const handleTaskDelete = id => {
        const proceed = window.confirm('Want to Delete Your Task?');
        if (proceed) {
            fetch(`https://taskmanager-project-server.vercel.app/tasks/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Your task is deleted successfully');
                        const remaining = tasks.filter(odr => odr._id !== id);
                        setTasks(remaining);
                    }
                })
        }


    }
    const updateTask = id => {
        fetch(`https://taskmanager-project-server.vercel.app/tasks/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ taskDescription: '' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = tasks.filter(odr => odr._id !== id);
                    const approving = tasks.find(odr => odr._id === id);
                    approving.taskDescription = 'Approved'

                    const newTask = [approving, ...remaining];
                    setTasks(newTask);
                }
            })
    }
    return (
        <div className='m-6 p-6'>

            <div class="overflow-x-auto relative shadow-md sm:rounded-lg m-6">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                User name
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Task Title
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Task Description
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Update
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Delete
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td class="py-4 px-6">
                                Sliver
                            </td>
                            <td class="py-4 px-6">
                                Laptop
                            </td>

                            <td class="py-4 px-6">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                            <td class="py-4 px-6">
                                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                            </td>
                            <td class="py-4 px-6">
                                <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Completed</button>
                            </td>

                        </tr> */}
                        {
                            tasks.map(task => <Tasksrow

                                key={task._id}
                                task={task}

                                handleTaskDelete={handleTaskDelete}

                                updateTask={updateTask}
                            // handleInputChange={handleInputChange}
                            ></Tasksrow>)

                            // 
                            // 

                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Mytasks;