import { baseApi } from './baseApi';

export const rentalApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRentals: builder.query({
      query: () => '/rentals',
    }),
    createBooking: builder.mutation({
      query: (bookingData) => ({
        url: '/rentals',
        method: 'POST',
        body: bookingData,
      }),
    }),
    updatePaymentStatus: builder.mutation({
      query: ({ rentalId, paymentStatus }) => ({
        url: `/rentals/${rentalId}/pay`,
        method: 'PATCH',
        body: { paymentStatus },
      }),
    }),
  }),
});

export const { useGetRentalsQuery, useCreateBookingMutation, useUpdatePaymentStatusMutation } = rentalApi;
