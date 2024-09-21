import { baseApi } from './baseApi';

export const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    initiatePayment: builder.mutation<{
      paymentUrl: any; redirect_url: string 
}, { amount: number; customer_name: string; customer_phone: string; customer_email: string }>({
      query: (paymentData) => ({
        url: '/payment/initiate',
        method: 'POST',
        body: paymentData,
      }),
    }),
    
  }),
});

export const {
  useInitiatePaymentMutation,
} = paymentApi;
