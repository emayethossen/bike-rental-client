import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetBikeByIdQuery, useUpdateBikeAvailabilityMutation } from '../../../redux/api/bikeApi';
import { Alert, Spin, Modal, Form, Input, Button, message, DatePicker } from 'antd';
import { useInitiatePaymentMutation } from '../../../redux/api/paymentApi';
import { RootState } from '../../../redux/store';
import { useSelector } from 'react-redux';
import { useCreateRentalMutation } from '../../../redux/api/rentalApi';

const BikeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading, refetch } = useGetBikeByIdQuery(id);
  const [initiatePayment] = useInitiatePaymentMutation();
  const [updateBikeAvailability] = useUpdateBikeAvailabilityMutation();
  const user = useSelector((state: RootState) => state.auth.user);
  const userId = user?._id;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [createRental] = useCreateRentalMutation();
  const [form] = Form.useForm();

  if (isLoading) return <Spin tip="Loading bike details..." />;
  if (error || !data) return <Alert message="Error loading bike details" type="error" />;
  
  const bike = data?.data;

  const handleBookNow = () => setIsModalVisible(true);
  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handlePaymentAndBooking = async (values: any) => {
    try {
      const { startTime, customer_name, customer_phone, customer_email } = values;
      const amount = 100;

      if (!startTime || !customer_name || !customer_phone || !customer_email) {
        message.error('Please provide all required customer details.');
        return;
      }

      const startTimeISO = startTime.toISOString(); 

      // Initiate payment with booking details
      const paymentResponse = await initiatePayment({
        amount,
        customer_name,
        customer_phone,
        customer_email,
        
      }).unwrap();

      if (paymentResponse && typeof paymentResponse === 'string') {
        window.location.href = paymentResponse;
      } else {
        message.error('Payment initiation failed. Please try again later.');
        return;
      }

      // Create rental after successful payment initiation
      await createRental({
        bikeId: id,
        userId,
        startTime: startTimeISO,
        paymentStatus: 'Unpaid',
        isReturned: false,
      }).unwrap();

      await updateBikeAvailability({ id, isAvailable: false }).unwrap();
      message.success('Booking confirmed! Bike availability has been updated.');
      setIsModalVisible(false);
      form.resetFields();
      refetch();
    } catch (error) {
      console.error('Error during booking or payment:', error);
      message.error('Booking confirmation failed. Please try again later.');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">{bike.brand} - {bike.model}</h1>
      <img src={bike.bikeImage} alt={bike.model} className="w-full h-64 object-cover mb-4" />
      <p>Description: {bike.description}</p>
      <p>Price: ${bike.pricePerHour}</p>
      <p>CC: {bike.cc}</p>
      <p>Year: {bike.year}</p>
      <p>Brand: {bike.brand}</p>
      <p>Availability: {bike.isAvailable ? 'Available' : 'Unavailable'}</p>

      <Button
        onClick={handleBookNow}
        type="primary"
        disabled={!bike.isAvailable}
      >
        Book Now
      </Button>

      <Modal
        title="Book Your Ride"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handlePaymentAndBooking}
        >
          <Form.Item
            name="startTime"
            label="Start Time"
            rules={[{ required: true, message: 'Please select a start time' }]}
          >
            <DatePicker showTime format="YYYY-MM-DDTHH:mm:ss" placeholder="Select start time" />
          </Form.Item>
          <Form.Item
            name="customer_name"
            label="Customer Name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="customer_phone"
            label="Customer Phone"
            rules={[{ required: true, message: 'Please enter your phone number' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="customer_email"
            label="Customer Email"
            rules={[{ required: true, message: 'Please enter your email' }]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Pay Tk 100
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default BikeDetail;
