import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootReducer } from '../reducers'
import { Plate } from '../../models/Prato'

type Delivery = {
  receiver: string
  address: string
  city: string
  cep: string
  number: string
  complement?: string
}

export type Product = {
  id: number
  name: string
  price: number
  image: string
  description: string
}

export type CheckoutStep = 'cart' | 'delivery' | 'payment' | 'confirmation'

type CartState = {
  items: Plate[]
  isOpen: boolean
  currentStep: CheckoutStep
  orderId?: string
  delivery?: Delivery
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  currentStep: 'cart'
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Plate>) => {
      const itemExists = state.items.find(
        (item) => item.id === action.payload.id
      )
      if (!itemExists) {
        state.items.push(action.payload)
      }
      state.isOpen = true
      state.currentStep = 'cart'
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
      state.currentStep = 'cart'
    },
    close: (state) => {
      state.isOpen = false
    },
    setCheckoutStep: (state, action: PayloadAction<CheckoutStep>) => {
      state.currentStep = action.payload
    },
    startCheckout: (state, action: PayloadAction<Delivery>) => {
      state.delivery = action.payload
      state.currentStep = 'payment'
    },
    finishCheckout: (state, action: PayloadAction<string>) => {
      state.items = []
      state.delivery = undefined
      state.currentStep = 'confirmation'
      state.orderId = action.payload
    },
    clearCart: (state) => {
      state.items = []
      state.currentStep = 'cart'
      state.orderId = ''
    }
  }
})

export const {
  add,
  remove,
  open,
  close,
  setCheckoutStep,
  startCheckout,
  finishCheckout,
  clearCart
} = cartSlice.actions

export const selectCartTotal = (state: RootReducer) => {
  return state.cart.items.reduce((acc, item) => {
    return acc + (item.price || 0)
  }, 0)
}

export default cartSlice.reducer
