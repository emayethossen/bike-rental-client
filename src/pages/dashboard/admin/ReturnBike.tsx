import React from 'react';
import { useReturnBikeMutation, useGetRentalByIdQuery } from '../../../redux/api/rentalApi';

interface ReturnBikeProps {
  rentalId: string; 
}

const ReturnBike: React.FC<ReturnBikeProps> = ({ rentalId }) => {
  const { data: rental, error: rentalError, isLoading: rentalLoading } = useGetRentalByIdQuery(rentalId);
  const [returnBike, { isLoading: isReturning, isSuccess, isError }] = useReturnBikeMutation();

  // Handle the return action
  const handleReturn = async () => {
    console.log('Returning bike with rentalId:', rentalId); 
    try {
      await returnBike({ rentalId }).unwrap(); 
      alert('Bike returned successfully!');
    } catch (error) {
      console.error('Error returning bike:', error); 
      alert('Failed to return the bike. Please try again.');
    }
  };

  if (rentalLoading) return <div>Loading rental details...</div>;
  if (rentalError) return <div>Error loading rental details</div>;

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Return Bike</h2>
      <p><strong>Bike:</strong> {rental?.bike?.name || 'Bike name unavailable'}</p>
      <p><strong>Start Time:</strong> {rental?.startTime || 'N/A'}</p>
      <p><strong>Return Status:</strong> {rental?.isReturned ? 'Returned' : 'Not Returned'}</p>

      {!rental?.isReturned && (
        <button
          onClick={handleReturn}
          className="mt-4 w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          disabled={isReturning}
        >
          {isReturning ? 'Returning...' : 'Return Bike'}
        </button>
      )}

      {isSuccess && (
        <div className="mt-4 p-2 bg-green-100 text-green-700">
          Bike returned successfully!
        </div>
      )}

      {isError && (
        <div className="mt-4 p-2 bg-red-100 text-red-700">
          Failed to return the bike.
        </div>
      )}
    </div>
  );
};

export default ReturnBike;
