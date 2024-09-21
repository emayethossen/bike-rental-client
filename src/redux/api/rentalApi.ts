import { baseApi } from './baseApi';

export const rentalApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRentals: builder.query({
      query: () => '/rentals',
    }),
    createRental: builder.mutation({
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
    // New endpoint to update rental status and calculate cost upon return
    returnBike: builder.mutation({
      query: ({ rentalId, endTime }) => ({
        url: `/rentals/${rentalId}/return`,
        method: 'PATCH',
        body: { endTime },
      }),
    }),
    // New endpoint to get details of a specific rental
    getRentalById: builder.query({
      query: (rentalId) => `/rentals/${rentalId}`,
    }),
  }),
});

export const {
  useGetRentalsQuery,
  useCreateRentalMutation,
  useUpdatePaymentStatusMutation,
  useReturnBikeMutation, // Hook for the new returnBike mutation
  useGetRentalByIdQuery, // Hook for getting rental details by ID
} = rentalApi;
