import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const PaymentPage: React.FC = () => {
  const { bikeId } = useParams<{ bikeId: string }>();
  const { startTime } = useLocation().state as { startTime: string };

  const handlePayment = () => {
    // Implement payment logic here
    // On success, update rental status and bike availability
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Payment</h1>
      <p>Bike ID: {bikeId}</p>
      <p>Start Time: {startTime}</p>
      <p>Total Amount: TK 100</p>
      <button
        onClick={handlePayment}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Pay Now
      </button>
    </div>
  );
};

export default PaymentPage;
