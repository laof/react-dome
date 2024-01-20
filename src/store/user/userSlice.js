import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import "./user.css";

export const getUser = createAsyncThunk("test", () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(new Array(5).fill({ name: "db" })), 800);
  });
});

export const userSlice = createSlice({
  name: "user",
  initialState: { users: [{ name: "o_o" }] },
  reducers: {
    add(state, action) {
      state.users.push(action.payload);
    },
    delete(state, action) {
      state.users.pop();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      console.log(state);
      state.users = action.payload;
    });
  },
});
