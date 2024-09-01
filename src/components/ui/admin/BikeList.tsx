import { useState } from 'react';
import { useGetBikesQuery, useDeleteBikeMutation } from '../../../redux/api/bikeApi';
import BikeModal from './BikeModal';
import { Bike } from './BikeTypes';

const BikeList = () => {
  const { data, isLoading } = useGetBikesQuery();
  const [deleteBike] = useDeleteBikeMutation();
  const [selectedBike, setSelectedBike] = useState<Bike | null>(null);

  if (isLoading) return <div>Loading...</div>;

  const handleEdit = (bike: Bike) => {
    setSelectedBike(bike);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this bike?')) {
      await deleteBike(id);
    }
  };

const bikes=data?.data

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Bike Management</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 mb-4"
        onClick={() => setSelectedBike(null)}
      >
        Add New Bike
      </button>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Brand</th>
            <th className="px-4 py-2">Model</th>
            <th className="px-4 py-2">Year</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bikes?.map((bike) => (
            <tr key={bike._id}>
              <td className="border px-4 py-2">{bike.name}</td>
              <td className="border px-4 py-2">{bike.brand}</td>
              <td className="border px-4 py-2">{bike.model}</td>
              <td className="border px-4 py-2">{bike.year}</td>
              <td className="border px-4 py-2">${bike.pricePerHour}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-yellow-500 text-white px-2 py-1 mr-2"
                  onClick={() => handleEdit(bike)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1"
                  onClick={() => handleDelete(bike._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedBike !== null && (
        <BikeModal bike={selectedBike} onClose={() => setSelectedBike(null)} />
      )}
    </div>
  );
};

export default BikeList;
