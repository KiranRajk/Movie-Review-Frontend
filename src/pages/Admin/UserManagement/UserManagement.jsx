import React, { useEffect, useState } from 'react';
import './UserManagement.css';
import axiosInstance from '../../../../config/AxiosInstance';

const UserManagement = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axiosInstance.get('/api/v1/admin/dashboard');
            console.log(response.data);
            setUsers(response.data.usersWithReviews);
        } catch (error) {
            console.log('Error fetching users', error);
        }
    };

    const handleDeleteUser = async (userId) => {
        try {
            await axiosInstance.delete(`/api/v1/admin/deleteUser/${userId}`);
            setUsers(users.filter(user => user._id !== userId));
            alert('User Removed successfully')
        } catch (error) {
            console.log('Error deleting user', error);
        }
    };

    return (
        <div className='user-management-container'>
            <h1>User Management</h1>
            <table className='user-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Total Reviews</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.reviews.length}</td>
                            <td>
                                <button 
                                    className='delete-button' 
                                    onClick={() => handleDeleteUser(user._id)}
                                >
                                    Remove Account
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserManagement;
