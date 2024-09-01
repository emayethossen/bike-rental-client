import React, { useState } from 'react';
import { useGetAdminProfileQuery, useUpdateAdminProfileMutation } from '../../redux/services/userApi';
import { User } from '../../redux/services/userApi';

const Profile: React.FC = () => {
    const { data: profile, isLoading } = useGetAdminProfileQuery();
    const [updateProfile] = useUpdateAdminProfileMutation();
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState<Partial<User>>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSave = async () => {
        await updateProfile(formData);
        setEditMode(false);
    };

    if (isLoading) return <p>Loading...</p>;

    return (
        <div className="max-w-xl mx-auto p-4 bg-white shadow rounded-md">
            <h1 className="text-2xl font-bold mb-4">Admin Profile</h1>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    name="name"
                    defaultValue={profile?.name}
                    disabled={!editMode}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    name="email"
                    defaultValue={profile?.email}
                    disabled={!editMode}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                    type="text"
                    name="phone"
                    defaultValue={profile?.phone}
                    disabled={!editMode}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                    type="text"
                    name="address"
                    defaultValue={profile?.address}
                    disabled={!editMode}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div className="flex justify-end">
                {editMode ? (
                    <>
                        <button
                            onClick={handleSave}
                            className="mr-2 px-4 py-2 bg-green-500 text-white rounded-md"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => setEditMode(false)}
                            className="px-4 py-2 bg-gray-500 text-white rounded-md"
                        >
                            Cancel
                        </button>
                    </>
                ) : (
                    <button
                        onClick={() => setEditMode(true)}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    >
                        Edit
                    </button>
                )}
            </div>
        </div>
    );
};

export default Profile;
