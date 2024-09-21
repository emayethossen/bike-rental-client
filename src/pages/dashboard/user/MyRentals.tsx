import { Key, useState } from 'react';
import { useGetRentalsQuery, useUpdatePaymentStatusMutation } from '../../../redux/api/rentalApi';
import Loader from '../../../components/ui/Loader';

const MyRentals = () => {
  const { data, isLoading, error } = useGetRentalsQuery(""); // Fetch rentals from API
  const [updatePaymentStatus, { isLoading: isUpdating }] = useUpdatePaymentStatusMutation(); // Mutation for payment update
  const [activeTab, setActiveTab] = useState('Unpaid'); // State for active tab (Unpaid or Paid)

  // Handle payment when user clicks "Pay" button
  const handlePayment = async (rentalId: any) => {
    if (!window.confirm('Are you sure you want to pay for this rental?')) return; // Confirmation before payment

    try {
      await updatePaymentStatus({ rentalId, paymentStatus: 'Paid' }).unwrap(); // Update payment status to 'Paid'
      alert('Payment successful!'); // Show success message
    } catch (error) {
      console.error('Payment failed:', error); // Log error if payment fails
      alert('Payment failed. Please try again.');
    }
  };

  // Handle loading and error states
  if (isLoading) return <Loader />;
  if (error) return <p>Error loading rentals.</p>;

  // Ensure rentals array is defined
  const rentals = data?.data || [];
  // console.log(rentals)

  // Filter rentals based on active tab ('Unpaid' or 'Paid')
  const filteredRentals = rentals.filter((rental: { paymentStatus: string; }) => rental.paymentStatus === activeTab);
console.log(filteredRentals)
  return (
    <div className="p-4">
      {/* Tab buttons */}
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

      {/* Rental list */}
      <div>
        {filteredRentals.length > 0 ? (
          filteredRentals.map((rental: { id: Key | null | undefined; bike: { name: any; }; startTime: string | number | Date; returnTime: string | number | Date; totalCost: any; }) => (
            <div key={rental.id} className="p-4 border border-gray-300 rounded mb-2">
              <h3 className="font-bold">{rental.bike?.name || 'Bike Name Unavailable'}</h3>
              <p>Start Time: {rental.startTime ? new Date(rental.startTime).toLocaleString() : 'N/A'}</p>
              <p>Return Time: {rental.returnTime ? new Date(rental.returnTime).toLocaleString() : 'N/A'}</p>
              <p>Total Cost: Tk {rental.totalCost || 'N/A'}</p>
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
          ))
        ) : (
          <p className="text-center text-gray-500">
            {activeTab === 'Unpaid'
              ? 'No unpaid rentals at the moment.'
              : 'All rentals have been paid.'}
          </p>
        )}
      </div>
    </div>
  );
};

export default MyRentals;
