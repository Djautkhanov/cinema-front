import { configureStore } from '@reduxjs/toolkit'
import movies from '../features/moviesSlice'


export const store = configureStore({
  reducer: {
    movies,  
  },
})