import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Lebowski" },
  { id: "2", name: "Neil Young" },
  { id: "3", name: "Allan Gray" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
