import React from 'react';
import { useGetAllUsersQuery, usePromoteUserToAdminMutation, useDeleteUserMutation } from '../../../redux/api/userApi';

const AdminUserList: React.FC = () => {
    // Fetch users from the API
    const { data, error, isLoading } = useGetAllUsersQuery();
    const [promoteUserToAdmin, { isLoading: isPromoting }] = usePromoteUserToAdminMutation();
    const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-xl font-semibold">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-xl font-semibold text-red-500">Error loading users.</div>
            </div>
        );
    }

    const user = data?.data;

    const handlePromoteUser = async (userId: string) => {
        try {
            await promoteUserToAdmin(userId).unwrap();
            alert('User promoted to admin successfully!');
        } catch (error) {
            console.error('Failed to promote user:', error);
            alert('Failed to promote user to admin.');
        }
    };

    const handleDeleteUser = async (userId: string) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                await deleteUser(userId).unwrap();
                alert('User deleted successfully!');
            } catch (error) {
                console.error('Failed to delete user:', error);
                alert('Failed to delete user.');
            }
        }
    };

    return (
        <div className="p-4 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">User Management</h2>
            {user && user.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100 border-b">
                                <th className="p-3 text-left text-sm font-semibold text-gray-700">ID</th>
                                <th className="p-3 text-left text-sm font-semibold text-gray-700">Name</th>
                                <th className="p-3 text-left text-sm font-semibold text-gray-700">Email</th>
                                <th className="p-3 text-left text-sm font-semibold text-gray-700">Role</th>
                                <th className="p-3 text-left text-sm font-semibold text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map((user: any, index: number) => (
                                <tr key={user._id} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <td className="p-3 text-sm text-gray-700">{user._id}</td>
                                    <td className="p-3 text-sm text-gray-700">{user.name}</td>
                                    <td className="p-3 text-sm text-gray-700">{user.email}</td>
                                    <td className="p-3 text-sm text-gray-700">{user.role}</td>
                                    <td className="p-3 text-sm text-gray-700 space-x-2">
                                        {user.role !== 'admin' && (
                                            <button
                                                onClick={() => handlePromoteUser(user._id)}
                                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
                                                disabled={isPromoting}
                                            >
                                                {isPromoting ? 'Promoting...' : 'Promote'}
                                            </button>
                                        )}
                                        <button
                                            onClick={() => handleDeleteUser(user._id)}
                                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:bg-gray-400"
                                            disabled={isDeleting}
                                        >
                                            {isDeleting ? 'Deleting...' : 'Delete'}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center text-lg">No users found.</p>
            )}
        </div>
    );
};

export default AdminUserList;
