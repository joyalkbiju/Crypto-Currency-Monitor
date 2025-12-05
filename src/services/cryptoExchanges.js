import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Replace with your actual API key
const coinMarketCapHeaders = {
  'x-cg-demo-api-key': import.meta.env.VITE_EXCHANGE_API,
  
};

const baseUrl = 'https://api.coingecko.com';

const createRequest = (url) => ({ url, headers: coinMarketCapHeaders });

export const cryptoExchangeApi = createApi({
  reducerPath: 'cryptoExchangeApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    
    getTopExchanges: builder.query({
      query: () => createRequest('/api/v3/exchanges'),
    }),
  }),
});

export const { useGetTopExchangesQuery } = cryptoExchangeApi;
