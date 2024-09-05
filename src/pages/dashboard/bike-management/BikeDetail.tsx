import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetBikeByIdQuery } from '../../../redux/api/bikeApi';
import { Alert, Spin, Modal, Form, Input, Button, message } from 'antd';
import { useInitiatePaymentMutation } from '../../../redux/api/paymentApi';
import { useUpdateBikeAvailabilityMutation } from '../../../redux/api/bikeApi'; // Assume this API exists

const BikeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useGetBikeByIdQuery(id);
  const [initiatePayment, { error: paymentError }] = useInitiatePaymentMutation();
  const [updateBikeAvailability] = useUpdateBikeAvailabilityMutation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  if (isLoading) return <Spin tip="Loading bike details..." />;
  if (error || !data) return <Alert message="Error loading bike details" type="error" />;
  const bike = data?.data;

  const handleBookNow = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handlePaymentSuccess = async () => {
    try {
      await updateBikeAvailability({ id, isAvailable: false });
      message.success('Booking confirmed! Bike availability has been updated.');
      setIsModalVisible(false);
      form.resetFields();
    } catch (error) {
      console.error('Error updating bike availability:', error);
      message.error('Booking confirmation failed. Please try again later.');
    }
  };

  const handlePayment = async (values: any) => {
    try {
      const response = await initiatePayment({
        amount: 100, // Advanced payment amount
        customerName: values.customerName,
        customerPhone: values.customerPhone,
        customerEmail: values.customerEmail,
        customerAddress: values.customerAddress
      }).unwrap();

      if (response.redirect_url) {
        await handlePaymentSuccess();
        window.location.href = response.redirect_url;
        message.success('Redirecting to payment...');
      } else {
        console.error('Failed to initiate payment');
      }
    } catch (error) {
      console.error('Error initiating payment:', paymentError || error);
      message.error('Payment initiation failed. Please try again later.');
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
        disabled={!bike.isAvailable} // Disable button if bike is unavailable
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
          onFinish={handlePayment}
        >
          <Form.Item
            name="startTime"
            label="Start Time"
            rules={[{ required: true, message: 'Please select start time' }]}
          >
            <Input type="datetime-local" />
          </Form.Item>
          <Form.Item
            name="customerName"
            label="Customer Name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="customerPhone"
            label="Customer Phone"
            rules={[{ required: true, message: 'Please enter your phone number' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="customerEmail"
            label="Customer Email"
            rules={[{ required: true, message: 'Please enter your email' }]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item
            name="customerAddress"
            label="Customer Address"
            rules={[{ required: true, message: 'Please enter your address' }]}
          >
            <Input />
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
