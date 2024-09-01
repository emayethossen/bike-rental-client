import React, { useState, useEffect } from 'react';
import {
  useCreateBikeMutation,
  useUpdateBikeMutation,
} from '../../../redux/api/bikeApi';
import { Bike } from './BikeTypes';

interface BikeModalProps {
  bike: Bike | null;
  onClose: () => void;
}

const BikeModal: React.FC<BikeModalProps> = ({ bike, onClose }) => {
  const [formData, setFormData] = useState<Bike>(
    bike ?? {
      _id: '',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   console.log('Submitting form data:', formData);

  //   try {
  //     if (bike) {
  //       const result = await updateBike({ id: bike._id, updatedBike: formData });
  //       console.log('Bike updated successfully:', result);
  //     } else {
  //       const result = await createBike(formData);
  //       console.log('Bike created successfully:', result);
  //     }
  //     onClose(); // Close the modal only if the API call is successful
  //   } catch (error) {
  //     console.error('Error during bike submission:', error);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Adjust field name to match backend
    const updatedFormData = {
      ...formData,
      isAvailable: formData.isAvailable,  // Correct field name for the backend
      pricePerHour: parseFloat(formData.pricePerHour as unknown as string),
      year: parseInt(formData.year as unknown as string, 10),
    };
  
    try {
      let result;
      if (bike) {
        result = await updateBike({ id: bike._id, updatedBike: updatedFormData });
        console.log('API Response after update:', result);
      } else {
        result = await createBike(updatedFormData);
        console.log('API Response after creation:', result);
      }
  
      if (result?.data?.data) {
        console.log('Updated bike data from API:', result.data.data);
      } else {
        console.log('API did not return updated data:', result);
      }
  
      onClose(); // Close the modal only if the API call is successful
    } catch (error) {
      console.error('Error during bike submission:', error);
    }
  };
  
  
  
  

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-1/3">
        <h2 className="text-xl font-bold mb-4">
          {bike ? 'Edit Bike' : 'Add New Bike'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Brand</label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Model</label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Year</label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price Per Hour</label>
            <input
              type="number"
              name="pricePerHour"
              value={formData.pricePerHour}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
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
