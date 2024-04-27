import { configureStore } from '@reduxjs/toolkit'
import formReducer from './formSlice'

// Store Slicer
export const store = configureStore({
  reducer: {
    form: formReducer,
  },
})