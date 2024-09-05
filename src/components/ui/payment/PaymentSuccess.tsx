import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PaymentSuccess: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const confirmPayment = async () => {
            try {
                // Assuming payment details are passed via query params or state
                const paymentDetails = {/* extract payment details */ };
                await axios.post('/api/payment/success', paymentDetails);
                // Update UI or state accordingly
                navigate('/my-rentals');
            } catch (error) {
                console.error('Error confirming payment:', error);
            }
        };

        confirmPayment();
    }, [navigate]);

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Payment Successful</h1>
            <p>Your payment was successful. Thank you for your booking!</p>
        </div>
    );
};

export default PaymentSuccess;
