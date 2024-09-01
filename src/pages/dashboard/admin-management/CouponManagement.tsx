import React, { useState } from 'react';
import { useGetCouponsQuery, useCreateCouponMutation, useDeleteCouponMutation } from '../../services/baseApi';

const CouponManagementPage: React.FC = () => {
    const { data: coupons, isLoading } = useGetCouponsQuery();
    const [createCoupon] = useCreateCouponMutation();
    const [deleteCoupon] = useDeleteCouponMutation();
    const [newCoupon, setNewCoupon] = useState('');

    const handleCreate = async () => {
        if (newCoupon) {
            await createCoupon({ code: newCoupon, discount: 10 });
            setNewCoupon('');
        }
    };

    const handleDelete = async (id: string) => {
        await deleteCoupon(id);
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Coupon Management</h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="New Coupon Code"
                    value={newCoupon}
                    onChange={(e) => setNewCoupon(e.target.value)}
                    className="border p-2 mr-2"
                />
                <button className="bg-blue-500 text-white px-4 py-2" onClick={handleCreate}>Create</button>
            </div>
            <ul>
                {coupons?.map((coupon) => (
                    <li key={coupon.id} className="border-b py-2 flex justify-between items-center">
                        <div>
                            <h2 className="font-bold">Code: {coupon.code}</h2>
                            <p>Discount: {coupon.discount}%</p>
                        </div>
                        <div>
                            <button className="bg-red-500 text-white px-4 py-2" onClick={() => handleDelete(coupon.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CouponManagementPage;
