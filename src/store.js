import { configureStore } from '@reduxjs/toolkit'
import allBooksSlice from './features/books/allBooksSlice'
import userSlice from './features/users/userSlice'
import cartSlice from './features/cart/cartSlice'
import orderSlice from './features/orders/orderSlice'

const store = configureStore({
  reducer: {
    allBooks: allBooksSlice,
    user: userSlice,
    cart: cartSlice,
    order: orderSlice
  },
})

export default store