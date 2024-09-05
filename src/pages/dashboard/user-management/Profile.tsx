import React from 'react';
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from '../../../redux/api/userApi';
import { useForm } from 'react-hook-form';

interface ProfileFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
}

const Profile: React.FC = () => {
  const { data, error, isLoading } = useGetProfileQuery();
  const [updateProfile] = useUpdateProfileMutation();
  const { register, handleSubmit, reset } = useForm<ProfileFormData>();

  const onSubmit = async (formData: ProfileFormData) => {
    try {
      await updateProfile(formData).unwrap();
      alert('Profile updated successfully!');
    } catch (err) {
      alert('Failed to update profile.');
      console.log(formData);
    }
  };

  const userProfile = data?.data;
  React.useEffect(() => {
    if (userProfile) {
      reset({
        name: userProfile.name,
        email: userProfile.email,
        phone: userProfile.phone,
        address: userProfile.address,
      });
    }
  }, [userProfile, reset]);

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    return <div>Error loading profile.</div>;
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Welcome, {userProfile?.name}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Profile Fields */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            {...register('name')}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            {...register('email')}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            type="email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            id="phone"
            {...register('phone')}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            id="address"
            {...register('address')}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            type="text"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
