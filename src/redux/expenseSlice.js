import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expenses",
  initialState: {
    data: [],
    filter: "",
  },
  reducers: {
    addExpense: (state, action) => {
      state.data.push(action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addExpense, setFilter } = expenseSlice.actions;
export default expenseSlice.reducer;
