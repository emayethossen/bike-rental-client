import { baseApi } from './baseApi';

export const adminApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Admin profile
        getAdminProfile: builder.query<any, void>({
            query: () => '/admin/profile',
        }),
        updateAdminProfile: builder.mutation<any, Partial<any>>({
            query: (data) => ({
                url: '/admin/profile',
                method: 'PUT',
                body: data,
            }),
        }),

        // Bike Management
        getBikes: builder.query<any[], void>({
            query: () => '/admin/bikes',
        }),
        updateBike: builder.mutation<any, Partial<any>>({
            query: (data) => ({
                url: `/admin/bikes/${data.id}`,
                method: 'PUT',
                body: data,
            }),
        }),
        deleteBike: builder.mutation<any, string>({
            query: (id) => ({
                url: `/admin/bikes/${id}`,
                method: 'DELETE',
            }),
        }),
        createBike: builder.mutation<any, Partial<any>>({
            query: (data) => ({
                url: '/admin/bikes',
                method: 'POST',
                body: data,
            }),
        }),

        // User Management
        getUsers: builder.query<any[], void>({
            query: () => '/admin/users',
        }),
        deleteUser: builder.mutation<any, string>({
            query: (id) => ({
                url: `/admin/users/${id}`,
                method: 'DELETE',
            }),
        }),
        promoteUser: builder.mutation<any, string>({
            query: (id) => ({
                url: `/admin/users/promote/${id}`,
                method: 'PUT',
            }),
        }),

        // Rental Management
        getRentals: builder.query<any[], void>({
            query: () => '/admin/rentals',
        }),
        calculateRentalCost: builder.mutation<any, { id: string; endTime: string }>({
            query: ({ id, endTime }) => ({
                url: `/admin/rentals/return/${id}`,
                method: 'PUT',
                body: { endTime },
            }),
        }),

        // Coupon Management
        getCoupons: builder.query<any[], void>({
            query: () => '/admin/coupons',
        }),
        createCoupon: builder.mutation<any, Partial<any>>({
            query: (data) => ({
                url: '/admin/coupons',
                method: 'POST',
                body: data,
            }),
        }),
        deleteCoupon: builder.mutation<any, string>({
            query: (id) => ({
                url: `/admin/coupons/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
    overrideExisting: false,
});

export const {
    useGetAdminProfileQuery,
    useUpdateAdminProfileMutation,
    useGetBikesQuery,
    useUpdateBikeMutation,
    useDeleteBikeMutation,
    useCreateBikeMutation,
    useGetUsersQuery,
    useDeleteUserMutation,
    usePromoteUserMutation,
    useGetRentalsQuery,
    useCalculateRentalCostMutation,
    useGetCouponsQuery,
    useCreateCouponMutation,
    useDeleteCouponMutation,
} = adminApi;
