import { createSlice } from "@reduxjs/toolkit";

const balanceInitialState = {
  balance: 0,
  isLoading: false,
  error: null,
};

const balanceSlice = createSlice({
  name: "balance",
  initialState: balanceInitialState,
  reducers: {
    extraReducers: (builder) => {
      builder
        .addCase(setBalance.fulfilled, (state, action) => {
          state.balance = action.payload;
        })

        .addCase(setBalance.pending, (state, action) => {
          state.isLoading = true;
        })

        .addCase(setBalance.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        });
    },
  },
});

export const { setBalance } = balanceSlice.actions;
export const balanceReducer = balanceSlice.reducer;
