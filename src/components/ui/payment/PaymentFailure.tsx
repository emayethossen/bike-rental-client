import React from 'react';

const PaymentFailure: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Payment Failed</h1>
            <p>Unfortunately, your payment could not be processed. Please try again.</p>
        </div>
    );
};

export default PaymentFailure;
