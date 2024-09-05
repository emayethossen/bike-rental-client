import React from 'react';

const PaymentCancelled: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Payment Cancelled</h1>
            <p>Your payment was cancelled. If this was a mistake, please try again.</p>
        </div>
    );
};

export default PaymentCancelled;
