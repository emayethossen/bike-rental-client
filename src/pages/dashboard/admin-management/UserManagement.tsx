import React from 'react';
import { useGetUsersQuery, useDeleteUserMutation, usePromoteUserMutation } from '../../services/baseApi';

const UserManagementPage: React.FC = () => {
    const { data: users, isLoading } = useGetUsersQuery();
    const [deleteUser] = useDeleteUserMutation();
    const [promoteUser] = usePromoteUserMutation();

    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            await deleteUser(id);
        }
    };

    const handlePromote = async (id: string) => {
        await promoteUser(id);
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">User Management</h1>
            <ul>
                {users?.map((user) => (
                    <li key={user.id} className="border-b py-2 flex justify-between items-center">
                        <div>
                            <h2 className="font-bold">{user.name}</h2>
                            <p>{user.email}</p>
                        </div>
                        <div>
                            <button className="bg-yellow-500 text-white px-4 py-2 mr-2" onClick={() => handlePromote(user.id)}>Promote</button>
                            <button className="bg-red-500 text-white px-4 py-2" onClick={() => handleDelete(user.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserManagementPage;
