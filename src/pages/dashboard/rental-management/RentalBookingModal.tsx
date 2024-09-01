import { useState } from 'react';
import { useCreateBookingMutation } from '../../../redux/api/rentalApi';
import { useNavigate } from 'react-router-dom';

const RentalBookingModal = ({ bike, isOpen, onClose }) => {
  const [startTime, setStartTime] = useState('');
  const [createBooking] = useCreateBookingMutation();
  const navigate = useNavigate();

  const handleBooking = async () => {
    try {
      await createBooking({ bikeId: bike.id, startTime }).unwrap();
      // Assuming payment page is /payment
      navigate('/payment', { state: { amount: 100 } });
      onClose();
    } catch (error) {
      console.error('Failed to create booking:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-xl mb-4">Book {bike.name}</h2>
        <input
          type="datetime-local"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleBooking}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Pay Tk 100 and Book Now
        </button>
        <button onClick={onClose} className="ml-4 text-gray-600">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default RentalBookingModal;
