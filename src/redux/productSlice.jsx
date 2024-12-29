import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "idle",
};

// Define the async thunk
export const getProducts = createAsyncThunk("products/get", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const result = await response.json();
  return result;
});

// Define the slice
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "idle";
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = "error";
      });
  },
});

export default productSlice.reducer;
