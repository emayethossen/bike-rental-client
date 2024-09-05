import React from 'react';
import { useAppDispatch } from '../../../redux/hooks';
import { setSelectedRentalId } from '../../../redux/features/rentalSlice';
import { useGetRentalsQuery } from '../../../redux/api/rentalApi';

const AdminRentalManagement: React.FC = () => {
    const { data: rentals, isLoading, error } = useGetRentalsQuery();
    const dispatch = useAppDispatch();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading rentals</div>;

    const handleSelectRental = (rentalId: string) => {
        dispatch(setSelectedRentalId(rentalId));
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-semibold mb-4">Rental Management</h1>
            <table className="w-full table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Bike Name</th>
                        <th className="px-4 py-2">Start Time</th>
                        <th className="px-4 py-2">Return Time</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rentals.map((rental) => (
                        <tr key={rental.id} className="border-b">
                            <td className="px-4 py-2">{rental.bike.name}</td>
                            <td className="px-4 py-2">{new Date(rental.startTime).toLocaleString()}</td>
                            <td className="px-4 py-2">{rental.returnTime ? new Date(rental.returnTime).toLocaleString() : 'Not Returned'}</td>
                            <td className="px-4 py-2">
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                    onClick={() => handleSelectRental(rental.id)}
                                >
                                    Calculate
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminRentalManagement;
