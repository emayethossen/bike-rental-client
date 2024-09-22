import { useState } from 'react';
import { toast } from 'react-toastify';
import { Bike } from '../../../types/BikeTypes';
import { useDeleteBikeMutation, useGetBikesQuery } from '../../../redux/api/bikeApi';
import BikeModal from './BikeModal';
import Loader from '../../../components/ui/Loader';
import ConfirmationModal from '../../../utils/ConfirmationModal';

const BikeList = () => {
  const { data, refetch, isLoading } = useGetBikesQuery("");
  const [deleteBike] = useDeleteBikeMutation();
  const [selectedBike, setSelectedBike] = useState<Bike | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmOpen, setConfirmOpen] = useState(false);
  const [bikeIdToDelete, setBikeIdToDelete] = useState<string | null>(null);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }

  const handleEdit = (bike: Bike) => {
    setSelectedBike(bike);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    setBikeIdToDelete(id);
    setConfirmOpen(true); 
  };

  const confirmDelete = async () => {
    if (bikeIdToDelete) {
      try {
        await deleteBike(bikeIdToDelete).unwrap();
        toast.success('Bike deleted successfully!');
        refetch(); // Refresh the list
      } catch (error) {
        toast.error('Error deleting bike.');
      } finally {
        setConfirmOpen(false); 
        setBikeIdToDelete(null); 
      }
    }
  };

  const openModalForNewBike = () => {
    setSelectedBike(null);
    setIsModalOpen(true);
  };

  const bikes = data?.data || [];

  return (
    <div>
      <h2 className="md:text-2xl text-xl font-semibold mb-4">Bike Management</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 mb-4"
        onClick={openModalForNewBike}
      >
        Add New Bike
      </button>
      <table className="min-w-full bg-white">
        <thead>
          <tr className='md:grid grid-cols-7 items-center justify-center'>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 hidden md:flex items-center justify-center py-2">Brand</th>
            <th className="px-4 hidden md:flex items-center justify-center py-2">Model</th>
            <th className="px-4 hidden md:flex items-center justify-center py-2">Year</th>
            <th className="px-4 hidden md:flex items-center justify-center py-2">Price</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bikes.map((bike: Bike) => (
            <tr className='md:grid grid-cols-7 ' key={bike._id}>
              <td className="border px-4 py-2 text-center">
                {bike.bikeImage ? (
                  <img src={bike.bikeImage} alt={bike.name} className="h-12 w-12 rounded mx-auto object-cover" />
                ) : (
                  <span>No Image</span>
                )}
              </td>
              <td className="border px-4 py-2">{bike.name}</td>
              <td className="border hidden md:inline-flex px-4 py-2">{bike.brand}</td>
              <td className="border hidden md:inline-flex px-4 py-2">{bike.model}</td>
              <td className="border hidden md:inline-flex px-4 py-2">{bike.year}</td>
              <td className="border hidden md:inline-flex px-4 py-2">${bike.pricePerHour}</td>
              <td className="border px-4 py-2 text-center">
                <button
                  className="bg-yellow-500 text-white px-2 py-1 mr-2"
                  onClick={() => handleEdit(bike)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1"
                  onClick={() => handleDelete(bike._id as string)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <BikeModal
          bike={selectedBike}
          onClose={() => {
            setIsModalOpen(false);
            refetch(); // Refresh the list when the modal is closed
          }}
        />
      )}

      {isConfirmOpen && (
        <ConfirmationModal
          onConfirm={confirmDelete}
          onCancel={() => setConfirmOpen(false)}
        />
      )}
    </div>
  );
};

export default BikeList;
