import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Addtask = () => {
    const { user } = useContext(AuthContext)
    const handleSubmitTask = event => {
        event.preventDefault();
        const form = event.target;
        const taskname = form.name.value;
        const taskDescription = form.message.value;
        const taskfile = form.file.value;
        const email = user?.email || 'unregistered';
        const userName = user?.name || 'unnamed';
        const status = 'not done'

        const task = {
            customer: userName,
            email,
            taskname,
            taskDescription,
            taskfile,
            status
        }
        fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Task posted successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));

    }
    return (
        <div className='m-6 p-6'>

            <form onSubmit={handleSubmitTask} className='m-6'>
                <div class="mb-6">
                    <label for="name" class="block mb-2  text-lg font-bold text-gray-900 dark:text-white ">Task Title</label>
                    <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Task Title" required />
                </div>

                <div className='mb-6'>
                    <label for="message" class="block mb-2 text-lg font-bold text-gray-900 dark:text-white">Task Description</label>
                    <textarea id="message" name="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Describe your task..."></textarea>
                </div>
                <div className='mb-6'>

                    <label class="block mb-2 text-lg font-bold  text-gray-900 dark:text-white" for="user_avatar">Upload file</label>
                    <input class="block w-full text-sm text-gray-900  rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" name="file" type="file" />


                </div>

                <button type="submit" class="text-white bg-gray-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mt-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </div>
    );
};

export default Addtask;