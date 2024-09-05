import { baseApi } from './baseApi';

export const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    initiatePayment: builder.mutation<{ redirect_url: string }, { amount: number; customerName: string; customerPhone: string; customerEmail: string; customerAddress: string }>({
      query: (paymentData) => ({
        url: '/payment/initiate-payment',
        method: 'POST',
        body: paymentData,
      }),
    }),
    
  }),
});

export const {
  useInitiatePaymentMutation,
} = paymentApi;
