import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react"


const cryptonewsheads= {
    'x-rapidapi-key': import.meta.env.VITE_NEWS_API,
    'x-rapidapi-host': 'cryptocurrency-news2.p.rapidapi.com'
  }

  const baseUrl='https://cryptocurrency-news2.p.rapidapi.com'

  const createRequest=(url)=>({url,headers:cryptonewsheads})

  export const cryptoNewsApi = createApi({
      reducerPath: 'cryptoNewsApi',
      baseQuery: fetchBaseQuery({baseUrl}),
      endpoints:(builder)=>({
          getCryptoNews: builder.query({
              query:()=>createRequest(`/v1/cryptodaily`)
          })
      })
  })

  export const{useGetCryptoNewsQuery}=cryptoNewsApi