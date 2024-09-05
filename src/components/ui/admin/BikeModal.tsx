import React, { useState, useEffect } from 'react';
import { useCreateBikeMutation, useUpdateBikeMutation } from '../../../redux/api/bikeApi';
import { Bike } from './BikeTypes';
import { toast } from 'react-toastify';

interface BikeModalProps {
  bike: Bike | null;
  onClose: () => void;
}

const BikeModal: React.FC<BikeModalProps> = ({ bike, onClose }) => {
  const [formData, setFormData] = useState<Bike>(
    bike ?? {
      name: '',
      description: '',
      pricePerHour: 0,
      cc: 0,
      year: new Date().getFullYear(),
      model: '',
      brand: '',
      isAvailable: true,
    },
  );

  const [createBike] = useCreateBikeMutation();
  const [updateBike] = useUpdateBikeMutation();

  useEffect(() => {
    if (bike) {
      setFormData(bike);
    }
  }, [bike]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
  
    setFormData({
      ...formData,
      [name]: name === 'isAvailable' ? value === 'true' : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const updatedFormData = {
      ...formData,
      pricePerHour: parseFloat(formData.pricePerHour.toString()), // Convert to number
      year: parseInt(formData.year.toString(), 10), // Convert to number
      isAvailable: formData.isAvailable // Boolean should be directly used
    };
  
    try {
      if (bike) {
        await updateBike({ id: bike._id, bike: updatedFormData }).unwrap();
        toast.success('Bike updated successfully!');
      } else {
        await createBike(updatedFormData).unwrap();
        toast.success('Bike created successfully!');
      }
      onClose();
    } catch (error) {
      console.error('Error during bike submission:', error);
      toast.error('Error occurred while saving bike.');
    }
  };
  
  

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl mb-4">{bike ? 'Edit Bike' : 'Add New Bike'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="description">
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="pricePerHour">
              Price per Hour
            </label>
            <input
              type="number"
              id="pricePerHour"
              name="pricePerHour"
              value={formData.pricePerHour}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="cc">
              CC
            </label>
            <input
              type="number"
              id="cc"
              name="cc"
              value={formData.cc}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="year">
              Year
            </label>
            <input
              type="number"
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="model">
              Model
            </label>
            <input
              type="text"
              id="model"
              name="model"
              value={formData.model}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="brand">
              Brand
            </label>
            <input
              type="text"
              id="brand"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2"
            >
              {bike ? 'Update Bike' : 'Add Bike'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BikeModal;
