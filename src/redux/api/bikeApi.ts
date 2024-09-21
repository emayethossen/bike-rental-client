import { baseApi } from './baseApi';

export const bikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBikes: builder.query({
      query: () => '/bikes', 
    }),
    getBikeById: builder.query({
      query: (id) => `/bikes/${id}`,
    }),
    // Additional admin-specific endpoints if needed
    createBike: builder.mutation({
      query: (bike) => ({
        url: '/bikes',
        method: 'POST',
        body: bike,
      }),
    }),
    updateBike: builder.mutation({
      query: ({ id, bike }) => ({
        url: `/bikes/${id}`,
        method: 'PUT',
        body: bike,
      }),
    }),
    deleteBike: builder.mutation({
      query: (id) => ({
        url: `/bikes/${id}`,
        method: 'DELETE',
      }),
    }),
    updateBikeAvailability: builder.mutation({
      query: ({ id, isAvailable }) => ({
        url: `/bikes/${id}/availability`,
        method: 'PATCH',
        body: { isAvailable },
      }),
    }),
  }),
});

export const {
  useGetBikesQuery,
  useGetBikeByIdQuery,
  useCreateBikeMutation,
  useUpdateBikeMutation,
  useDeleteBikeMutation,
  useUpdateBikeAvailabilityMutation,
} = bikeApi;

