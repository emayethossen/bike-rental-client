import { Key, useState } from 'react';
import { useGetRentalsQuery, useInitiatePaymentMutation, useUpdatePaymentStatusMutation } from '../../../redux/api/rentalApi';
import Loader from '../../../components/ui/Loader';
import { toast } from 'react-toastify';

const MyRentals = () => {
  const { data, isLoading, error } = useGetRentalsQuery("");
  const [initiatePayment] = useInitiatePaymentMutation();
  const [updatePaymentStatus, { isLoading: isUpdating }] = useUpdatePaymentStatusMutation();
  const [activeTab, setActiveTab] = useState('Unpaid');

  const handlePayment = async (rentalId: string, totalCost: number) => {
    if (!window.confirm('Are you sure you want to pay for this rental?')) return;

    try {
      const { data } = await initiatePayment({ rentalId, totalAmount: totalCost }).unwrap();

      if (data?.paymentUrl) {
        window.location.href = data.paymentUrl;
      } else {
        toast.error('Failed to initiate payment.');
      }
    } catch (error) {
      console.error('Payment failed:', error);
      toast.error('Payment failed. Please try again.');
    }
  };

  if (isLoading) return <Loader />;
  if (error) return <p>Error loading rentals.</p>;

  const rentals = data?.data || [];
  const filteredRentals = rentals.filter((rental: { paymentStatus: string }) => rental.paymentStatus === activeTab);

  return (
    <div className="p-4">
      <div className="mb-4 flex justify-center">
        <button
          onClick={() => setActiveTab('Unpaid')}
          className={`mr-4 px-4 py-2 rounded ${activeTab === 'Unpaid' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Unpaid
        </button>
        <button
          onClick={() => setActiveTab('Paid')}
          className={`px-4 py-2 rounded ${activeTab === 'Paid' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Paid
        </button>
      </div>

      <div>
        {filteredRentals.length > 0 ? (
          filteredRentals.map((rental: { id: Key, bike: { name: string }, startTime: string, returnTime: string, totalCost: number }) => (
            <div key={rental.id} className="p-4 border border-gray-300 rounded mb-2">
              <h3 className="font-bold">{rental.bike?.name || 'Bike Name Unavailable'}</h3>
              <p>Start Time: {rental.startTime ? new Date(rental.startTime).toLocaleString() : 'N/A'}</p>
              <p>Return Time: {rental.returnTime ? new Date(rental.returnTime).toLocaleString() : 'N/A'}</p>
              <p>Total Cost: Tk {rental.totalCost || 'N/A'}</p>
              {activeTab === 'Unpaid' && (
                <button
                  onClick={() => handlePayment(rental.id as string, rental.totalCost)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  disabled={isUpdating}
                >
                  {isUpdating ? 'Processing...' : 'Pay'}
                </button>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            {activeTab === 'Unpaid' ? 'No unpaid rentals at the moment.' : 'All rentals have been paid.'}
          </p>
        )}
      </div>
    </div>
  );
};

export default MyRentals;
