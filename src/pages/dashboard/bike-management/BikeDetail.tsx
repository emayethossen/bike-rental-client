import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetBikeByIdQuery } from '../../../redux/api/bikeApi';
import { Alert, Spin } from 'antd';

const BikeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useGetBikeByIdQuery(id);
  if (isLoading) return <Spin tip="Loading bike details..." />;
  if (error || !data) return <Alert message="Error loading bike details" type="error" />;
  const bike = data?.data;
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">{bike.brand} - {bike.model}</h1>
      <img src={bike.imageUrl} alt={bike.model} className="w-full h-64 object-cover mb-4" />
      <p>Description: {bike.description}</p>
      <p>Price: ${bike.price}</p>
      <p>CC: {bike.cc}</p>
      <p>Year: {bike.year}</p>
      <p>Brand: {bike.brand}</p>
      <p>Availability: {bike.availability ? 'Available' : 'Unavailable'}</p>
      <button
        onClick={() => window.location.href = `/booking/${bike._id}`}
        className="mt-4 p-2 bg-green-500 text-white rounded"
      >
        Book Now
      </button>
    </div>
  );
};

export default BikeDetail;
