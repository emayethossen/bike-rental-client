import { useState } from 'react';
import { useGetRentalsQuery, useUpdatePaymentStatusMutation } from '../../../redux/api/rentalApi';
import Loader from '../../../components/ui/Loader';

const MyRentals = () => {
  const { data, isLoading, error } = useGetRentalsQuery();
  const [updatePaymentStatus, { isLoading: isUpdating }] = useUpdatePaymentStatusMutation();
  const [activeTab, setActiveTab] = useState('Unpaid');

  const handlePayment = async (rentalId) => {
    if (!window.confirm('Are you sure you want to pay for this rental?')) return;

    try {
      await updatePaymentStatus({ rentalId, paymentStatus: 'Paid' }).unwrap();
      alert('Payment successful!');
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
    }
  };

  if (isLoading) return <Loader />;
  if (error) return <p>Error loading rentals.</p>;

  const rentals = data?.data;
  const filteredRentals = rentals?.filter((rental) => rental.paymentStatus === activeTab);

  return (
    <div className="p-4">
      <div className="mb-4">
        <button
          onClick={() => setActiveTab('Unpaid')}
          className={`mr-4 ${activeTab === 'Unpaid' ? 'font-bold' : ''}`}
        >
          Unpaid
        </button>
        <button
          onClick={() => setActiveTab('Paid')}
          className={`${activeTab === 'Paid' ? 'font-bold' : ''}`}
        >
          Paid
        </button>
      </div>
      <div>
        {filteredRentals?.map((rental) => (
          <div key={rental.id} className="p-4 border border-gray-300 rounded mb-2">
            <h3 className="font-bold">{rental.bike.name}</h3>
            <p>Start Time: {new Date(rental.startTime).toLocaleString()}</p>
            <p>Return Time: {rental.returnTime ? new Date(rental.returnTime).toLocaleString() : 'N/A'}</p>
            <p>Total Cost: Tk {rental.totalCost}</p>
            {activeTab === 'Unpaid' && (
              <button
                onClick={() => handlePayment(rental.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
                disabled={isUpdating}
              >
                {isUpdating ? 'Processing...' : 'Pay'}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRentals;
