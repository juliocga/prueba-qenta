import { configureStore } from '@reduxjs/toolkit'
import  empleadosReducer  from './src/features/users/empleadosSlice'

export const store = configureStore({
  reducer: {
    empleados: empleadosReducer,
  },
})