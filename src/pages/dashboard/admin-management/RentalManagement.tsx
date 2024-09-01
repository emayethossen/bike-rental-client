import React from 'react';
import { useGetRentalsQuery, useUpdateRentalStatusMutation } from '../../services/baseApi';

const RentalManagementPage: React.FC = () => {
    const { data: rentals, isLoading } = useGetRentalsQuery();
    const [updateRentalStatus] = useUpdateRentalStatusMutation();

    const handleReturn = async (id: string) => {
        await updateRentalStatus({ id, endTime: new Date() });
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Rental Management</h1>
            <ul>
                {rentals?.map((rental) => (
                    <li key={rental.id} className="border-b py-2 flex justify-between items-center">
                        <div>
                            <h2 className="font-bold">Rental ID: {rental.id}</h2>
                            <p>User: {rental.userId}</p>
                            <p>Bike: {rental.bikeId}</p>
                            <p>Status: {rental.status}</p>
                        </div>
                        <div>
                            {rental.status === 'active' && (
                                <button className="bg-green-500 text-white px-4 py-2" onClick={() => handleReturn(rental.id)}>Mark as Returned</button>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RentalManagementPage;
