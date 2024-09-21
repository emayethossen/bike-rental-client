// ReturnBike.tsx
import React, { useState } from 'react';
import { useReturnBikeMutation, useGetRentalByIdQuery } from '../../../redux/api/rentalApi'; // Adjust the path accordingly

interface ReturnBikeProps {
  rentalId: string; // This should be passed as a prop (or fetched from route params if you're using routing)
}

const ReturnBike: React.FC<ReturnBikeProps> = ({ rentalId }) => {
  const [endTime, setEndTime] = useState<string>(''); // Local state to hold the end time
  const { data: rental, error: rentalError, isLoading: rentalLoading } = useGetRentalByIdQuery(rentalId); // Fetch rental details

  const [returnBike, { isLoading: isReturning, isSuccess, isError }] = useReturnBikeMutation(); // Hook for the returnBike mutation

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!endTime) {
      alert('Please select an end time');
      return;
    }
    try {
      await returnBike({ rentalId, endTime }).unwrap();
      alert('Bike returned successfully!');
    } catch (error) {
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

      <form onSubmit={handleSubmit} className="mt-4">
        <label className="block mb-2">
          End Time:
          <input
            type="datetime-local"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
        </label>

        <button
          type="submit"
          className="mt-4 w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          disabled={isReturning}
        >
          {isReturning ? 'Returning...' : 'Return Bike'}
        </button>
      </form>

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
