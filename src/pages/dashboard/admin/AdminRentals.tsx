import React, { useState } from 'react';
import ReturnBike from './ReturnBike'; 
import { useGetAdminRentalsQuery } from '../../../redux/api/rentalApi';

const AdminRentals: React.FC = () => {
    const { data: rentals, error, isLoading } = useGetAdminRentalsQuery(""); 
    const [selectedRentalId, setSelectedRentalId] = useState<string | null>(null); 

    if (isLoading) return <div>Loading rentals...</div>;
    if (error) return <div>Error loading rentals</div>;

    return (
        <div className="admin-rentals">
            <h2 className="text-2xl font-bold mb-4">Admin Rentals</h2>
            <ul>
                {rentals.map((rental) => (
                    <li key={rental._id} className="rental-item">
                        <p><strong>Bike:</strong> {rental.bike.name}</p>
                        <p><strong>Start Time:</strong> {rental.startTime}</p>
                        <p><strong>Return Time:</strong> {rental.returnTime || 'Not Returned'}</p>
                        <p><strong>Total Cost:</strong> {rental.totalCost || 'N/A'}</p>
                        {!rental.isReturned && (
                            <button
                                className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                onClick={() => setSelectedRentalId(rental._id)} 
                            >
                                Return Bike
                            </button>
                        )}
                    </li>
                ))}
            </ul>

            {/* Conditionally render the ReturnBike component */}
            {selectedRentalId && (
                <div className="mt-8">
                    <ReturnBike rentalId={selectedRentalId} />
                    <button
                        className="mt-4 p-2 bg-red-500 text-white rounded"
                        onClick={() => setSelectedRentalId(null)} 
                    >
                        Cancel
                    </button>
                </div>
            )}
        </div>
    );
};

export default AdminRentals;
