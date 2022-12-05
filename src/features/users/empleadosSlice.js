import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

// Initial state
const initialState = {
  empleadosState: [],
  empleadosSelectedState: [],
};

// Actual Slice
export const empleadosSlice = createSlice({
  name: "empleados",
  initialState,
  reducers: {

    // Action to set
    setEmpleadosState(state, action) {
      state.empleadosState = action.payload;
    },

    setEmpleadosSelectedState(state, action) {
      state.empleadosSelectedState = action.payload;
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.empleados,
        };
      },
    },

  },
});

export const { setEmpleadosState, setEmpleadosSelectedState } = empleadosSlice.actions;

export const selectEmpleadosState = (state) => state.empleados.empleadosState;

export const selectEmpleadosSelectedState = (state) => state.empleados.empleadosSelectedState;

export default empleadosSlice.reducer;