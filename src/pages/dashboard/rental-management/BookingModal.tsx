import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface BookingModalProps {
  bikeId: string;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ bikeId, onClose }) => {
  const [startTime, setStartTime] = useState<string>('');
  const navigate = useNavigate();

  const handleBookNow = () => {
    // Handle booking logic (e.g., store booking info, etc.)
    navigate(`/payment/${bikeId}`, { state: { startTime } });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-lg font-bold mb-4">Book Bike</h2>
        <label className="block mb-2">
          Start Time:
          <input
            type="datetime-local"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </label>
        <button
          onClick={handleBookNow}
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Pay TK 100 and Book Now
        </button>
        <button
          onClick={onClose}
          className="mt-2 p-2 bg-gray-500 text-white rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BookingModal;
