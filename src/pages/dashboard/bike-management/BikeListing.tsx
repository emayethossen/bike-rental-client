import React, { useState } from 'react';
import { useGetBikesQuery } from '../../../redux/api/bikeApi';

const BikeListing: React.FC = () => {
  const { data, error, isLoading } = useGetBikesQuery();
  const [brandFilter, setBrandFilter] = useState<string>('');
  const [modelFilter, setModelFilter] = useState<string>('');
  const [availabilityFilter, setAvailabilityFilter] = useState<boolean | null>(null);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading bikes</div>;
  const bikes = data?.data
  console.log(bikes)
  const filteredBikes = bikes?.filter((bike) => {
    return (
      (brandFilter ? bike.brand.includes(brandFilter) : true) &&
      (modelFilter ? bike.model.includes(modelFilter) : true) &&
      (availabilityFilter !== null ? bike.availability === availabilityFilter : true)
    );
  });

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Available Bikes</h1>

      {/* Filter Options */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Filter by brand"
          value={brandFilter}
          onChange={(e) => setBrandFilter(e.target.value)}
          className="p-2 border rounded mr-2"
        />
        <input
          type="text"
          placeholder="Filter by model"
          value={modelFilter}
          onChange={(e) => setModelFilter(e.target.value)}
          className="p-2 border rounded mr-2"
        />
        <select
          value={availabilityFilter === null ? '' : availabilityFilter.toString()}
          onChange={(e) => setAvailabilityFilter(e.target.value === '' ? null : e.target.value === 'true')}
          className="p-2 border rounded"
        >
          <option value="">All</option>
          <option value="true">Available</option>
          <option value="false">Unavailable</option>
        </select>
      </div>

      {/* Bike List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBikes?.map((bike) => (
          <div key={bike._id} className="p-4 border rounded">
            <img src={bike.imageUrl} alt={bike.model} className="w-full h-48 object-cover mb-4" />
            <h2 className="text-lg font-bold">{bike.brand} - {bike.model}</h2>
            <p>Price: ${bike.pricePerHour}</p>
            <p>CC: {bike.cc}</p>
            <p>Year: {bike.year}</p>
            <p>Availability: {bike.availability ? 'Available' : 'Unavailable'}</p>
            <button
              onClick={() => window.location.href = `bikes/${bike._id}`}
              className="mt-2 p-2 bg-blue-500 text-white rounded"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BikeListing;
