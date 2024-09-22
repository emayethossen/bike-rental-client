import { baseApi } from './baseApi';

export const rentalApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch all rentals
    getRentals: builder.query({
      query: () => '/rentals',
    }),

    // Create a new rental (Booking a bike)
    createRental: builder.mutation({
      query: (bookingData) => ({
        url: '/rentals',
        method: 'POST',
        body: bookingData,
      }),
    }),

    // Update payment status of a rental
    updatePaymentStatus: builder.mutation({
      query: ({ rentalId, paymentStatus }) => ({
        url: `/rentals/${rentalId}/pay`,
        method: 'PATCH',
        body: { paymentStatus },
      }),
    }),

    // Initiate payment process for a rental
    initiatePayment: builder.mutation({
      query: ({ rentalId, totalAmount }) => ({
        url: '/payment/sslcommerz',
        method: 'POST',
        body: { rentalId, totalAmount },
      }),
    }),

    returnBike: builder.mutation({
      query: (rentalId: string) => {
        if (!rentalId) {
          throw new Error("rentalId is required"); 
        }
        return {
          url: `/rentals/${rentalId}/return`,
          method: 'PUT',
        };
      },
    }),
    
    getAdminRentals: builder.query({
      query: () => '/admin/rentals',
    }),
    

    // Fetch details of a specific rental 
    getRentalById: builder.query({
      query: (rentalId) => `/rentals/${rentalId}`,
    }),
  }),
});

export const {
  useGetRentalsQuery,
  useCreateRentalMutation,
  useUpdatePaymentStatusMutation,
  useInitiatePaymentMutation,
  useReturnBikeMutation, 
  useGetAdminRentalsQuery,  
  useGetRentalByIdQuery, 
} = rentalApi;
