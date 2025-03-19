'use client';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const ManageUser = () => {

    const [userList, setUserList] = useState([]);

    const fetchUserData = async () => {
        const res = await axios.get('http://localhost:5000/user/getall');
        console.table(res.data);
        setUserList(res.data);
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    const deleteUser = (id) => {
        axios.delete('http://localhost:5000/user/delete/' + id)
            .then((result) => {
                toast.success('User Deleted Successfully');
                fetchUserData();
            }).catch((err) => {
                toast.error('Failed to delete user');
            });
    }

    return (
        <div>

            <div className='container mx-auto'>
                <h2 className='text-center font-bold text-3xl my-6'>Manage Users</h2>
                <table className='w-full'>
                    <thead className='border-y-2'>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>CreatedAt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userList.map((user) => {
                                return (
                                    <tr key={user._id}>
                                        <td>{user._id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.city}</td>
                                        <td>{user.createdAt}</td>
                                        <td>
                                            <button
                                                onClick={() => { deleteUser(user._id) }}
                                                className='bg-red-500 text-white px-2 py-1 rounded'
                                            >Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ManageUser;          