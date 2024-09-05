import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

const RentalManagement: React.FC = () => {
    const { rentals } = useSelector((state: RootState) => state.rentals);
    const [activeTab, setActiveTab] = React.useState<'paid' | 'unpaid'>('unpaid');

    const handlePayClick = (rentalId: string) => {
        // Navigate to payment page with rentalId
        window.location.href = `/payment/${rentalId}`;
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">My Rentals</h1>
            <div className="mb-4">
                <button
                    onClick={() => setActiveTab('unpaid')}
                    className={`p-2 ${activeTab === 'unpaid' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Unpaid Rentals
                </button>
                <button
                    onClick={() => setActiveTab('paid')}
                    className={`p-2 ${activeTab === 'paid' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Paid Rentals
                </button>
            </div>
            <div>
                {rentals.filter(rental => rental.status === activeTab).map((rental) => (
                    <div key={rental.id} className="p-4 border rounded mb-4">
                        <h2 className="text-lg font-bold">{rental.bike.brand} - {rental.bike.model}</h2>
                        <p>Start Time: {rental.startTime}</p>
                        {rental.endTime && <p>Return Time: {rental.endTime}</p>}
                        <p>Total Cost: ${rental.totalCost}</p>
                        {activeTab === 'unpaid' && (
                            <button
                                onClick={() => handlePayClick(rental.id)}
                                className="p-2 bg-blue-500 text-white rounded"
                            >
                                Pay
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RentalManagement;
