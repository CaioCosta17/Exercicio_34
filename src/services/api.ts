import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../models/Restaurant'

type PurchaseResponse = {
  orderId: string
}

type PurchasePayload = {
  products: {
    id: number
    price: number
  }[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getFeaturedRestaurants: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),

    getRestaurant: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`
    }),

    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetFeaturedRestaurantsQuery,
  useGetRestaurantQuery,
  usePurchaseMutation
} = api

export default api
